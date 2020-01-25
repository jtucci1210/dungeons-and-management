//Library Imports
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const socketio = require("socket.io");

//File Imports
const users = require("./routes/api/users");
const characters = require("./routes/api/characters")
const campaigns = require("./routes/api/campaigns")

//Setup
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
mongoose
        .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Connected to MongoDB successfully"))
        .catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

//Routes
app.use("/api/users", users);
app.use("/api/characters", characters);
app.use("/api/campaigns", campaigns);

//Websockets Set-Up
const socketPort = 8080;
const server = app.listen(socketPort, function () {
        console.log("Listening at http://localhost: " + socketPort);
});
const io = socketio(server);

//Socket Listeners
//These listen for events that get sent from the frontend and then send back a response
io.on("connection", function (socket) {
        console.log("made connection with socket " + socket.id);

        socket.on("joinCampaign", function (roomName) {
                socket.join(roomName); //Join a room
                console.log("Joined room: " + roomName)
                io.to(roomName).emit("receive-room", "made it")
        });

        //Test listener for a room and responsding
        // socket.on("test-room", function (data) {
        //         io.to(data).emit("receive-room", 'more-success')
        // });

        socket.on("hp", function (data) {
                io.sockets.emit("hp", data);
        });

        socket.on("dice", function (data) {
                io.sockets.emit("dice", data);
        });

        socket.on("total", function (data) {
                io.sockets.emit("total", data);
        });
});
