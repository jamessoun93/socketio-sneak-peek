const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.emit('welcome', 'SERVER-SIDE: Welcome to the websocket server!');
  socket.on('message', (msg) => {
    console.log(msg);
  });
});

server.listen(8000);