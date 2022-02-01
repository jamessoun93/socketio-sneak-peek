const express = require('express');
const app = express();
const { Server } = require('socket.io');
const expressServer = app.listen(9000);
const io = new Server(expressServer);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  io.emit('new user', 'new user just joined!');

  socket.on('disconnect', (reason) => {
    io.emit('user left', 'user left...');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
