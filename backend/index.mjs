import http from "http";
import { Server as SocketIOServer } from "socket.io";
import config from "config";
import internal from "stream";

const updateIntervalInMilliseconds =
  config.get("updateIntervalInSeconds") * 1000;

function random(min, max) {
  return Number((min + Math.random() * (max - min)).toFixed(2));
}

function randomMeasurement() {
  return {
    deviation: random(0, 10),
    deviationTolerance: random(0, 5),
  };
}

function randomRows(numberOfRows) {
  return [...Array(numberOfRows)].map((r) => ({
    x: randomMeasurement(),
    y: randomMeasurement(),
    z: randomMeasurement(),
    diameter: randomMeasurement(),
  }));
}
function createNewPartValues() {
  return {
    "Seam": {
    featureA: randomRows(6),
    featureB: randomRows(1),
    featureC: randomRows(1),
    featureC: randomRows(1),
    featureD: randomRows(1),
    featureE: randomRows(3)
    },
    "Slot": {
    featureA: randomRows(6),
    featureB: randomRows(1),
    featureC: randomRows(1),
    featureC: randomRows(1),
    featureD: randomRows(1),
    featureE: randomRows(3)
    },
    "Hole": {
    featureA: randomRows(6),
    featureB: randomRows(1),
    featureC: randomRows(1),
    featureC: randomRows(1),
    featureD: randomRows(1),
    featureE: randomRows(3)
    }
  };
}

function updateRandomMeasurements(measuredValues) {
  for (const partName in measuredValues) {
    const part = measuredValues[partName];
    for (const key in part) {
      for (const row of part[key]) {
        for (const measurement in row) {
          row[measurement].deviation = random(0, 10);
        }
      }
    }
  }
}

const measuredValues = createNewPartValues();

setInterval(() => {
  updateRandomMeasurements(measuredValues);
}, config.updateRandomMeasurements);

const server = http.createServer();
const io = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
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
  console.log(
    `backend is running as a websocket server: ws://localhost:${port}`
  );
});
