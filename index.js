// Set up environments
require('dotenv').config();

// Set up imports
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const authRouter = require('./routes/AuthRoutes');

// Set up app
const app = express();

// Set up io
const io = new socketio.Server(http.createServer(app));

// Set up middlewares
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());

// Set up routes
app.use('/auth', authRouter);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// IO code
io.on('connect', (socket) => {
    console.log(`User connected : ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`User disconnected : ${socket.id}`);
    });
});

// Set up listener
app.listen(3000, () => {
    console.log('Server is up and running!');
});
