import http from "http";
import { Server as SocketIOServer } from "socket.io";
import config from "config";
import internal from "stream";

const updateIntervalInMilliseconds =
  config.get("updateIntervalInSeconds") * 1000;

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomMeasurement() {
  return {
    deviation: random(0, 10),
    deviationTolerance: random(0, 5),
  };
}

function randomRows(numberOfRows) {
  const array = Array(numberOfRows);

  for (const index of array.keys()) {
    array[index] = {
      x: randomMeasurement(),
      y: randomMeasurement(),
      z: randomMeasurement(),
      diameter: randomMeasurement(),
    };
  }

  return array;
}
function createNewValues() {
  return {
    featureA: randomRows(6),
    featureB: randomRows(1),
    featureC: randomRows(1),
    featureC: randomRows(1),
    featureD: randomRows(1),
    featureE: randomRows(3),
  };
}

function updateRandomMeasurements(measuredValues) {
  for (const key in measuredValues) {
    for (const row of measuredValues[key]) {
      for (const measurement in row) {
        row[measurement].deviation = random(0, 10);
      }
    }
  }
}

const measuredValues = createNewValues();

setInterval(() => {
  updateRandomMeasurements(measuredValues);
}, config.updateRandomMeasurements);

const server = http.createServer();
const io = new SocketIOServer(server);
io.on("connection", (client) => {
  const interval = setInterval(() => {
    client.emit("new-values", measuredValues);
  }, updateIntervalInMilliseconds);

  client.emit("new-values", measuredValues);

  client.on("disconnect", () => {
    clearInterval(internal);
  });
});

const port = config.get("port");

server.listen(port, () => {
    console.log(`backend is running as a websocket server: ws://localhost:${port}`);
});
