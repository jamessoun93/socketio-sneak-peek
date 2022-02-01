const express = require('express');
const app = express();
const { Server } = require('socket.io');
const expressServer = app.listen(9000);
const io = new Server(expressServer);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // socket.emit('messageFromServer', { data: 'Welcome, New User!' });
  // socket.on('messageToServer', (dataFromClient) => {
  //   console.log(dataFromClient);
  // });
});
