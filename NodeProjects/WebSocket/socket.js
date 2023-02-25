const express = require("express");
const app = express();
const WebSocket = require("ws");

const server = app.listen(8000);
const wSocket = new WebSocket.Server({ server });
app.use(express.json());
wSocket.on("connection", (ws) => {
  ws.on("message", (message) => {
    ws.send(message.toString());
  });
  ws.on("close", (ws) => {
    ws.send("Disconnected");
  });
  ws.send("WebSocket server");
});
wSocket.on("error", (e) => {
  console.log(e);
});
