const http = require('http');
const websocket = require('ws');

// WebSocket Server

const server = http.createServer((req, res) => {
  res.end('I am connected!');
});

const wss = new websocket.WebSocketServer({ server });

wss.on('headers', (headers, req) => {
  console.log(headers);
});

// send a msg anytime someone connects
wss.on('connection', (ws, req) => {
  ws.send('SERVER-SIDE: Welcome to the websocket server!');
  ws.on('message', (msg) => {
    console.log(msg.toString());
  });
});

server.listen(8000, () => {
  console.log('Server Listening!');
});