const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io');

const PORT = 3000;

io.on('connection', socket => {
    console.log('a user connected!')
});

server.listen(PORT, () => {
    console.log(`Running on port #${PORT}`);
});
