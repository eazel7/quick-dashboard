import "./App.css";
import { socket } from "./socket";
import React, { useState, useEffect } from "react";
import { FeatureCard } from "./components/FeatureCard.js";
import { Part } from "./components/Part.js";

function App() {
  socket.connect();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [currentValues, setCurrentValues] = useState({});

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onNewValuesEvent(values) {
      setCurrentValues(values);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("new-values", onNewValuesEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("new-values", onNewValuesEvent);
    };
  }, []);

  return (
    <div className="App">
      { Object.keys(currentValues).map(
        partName => <Part key={partName} partName={partName} currentValues={currentValues[partName]}></Part>
      ) }
      
    </div>
  );
}

export default App;
