//Library Imports
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
var socket = require("socket.io");

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

//Websockets
const socketPort = 3000;
const server = app.listen(socketPort, function () {
    console.log("Listening at http://localhost: " + socketPort);
});
const sock = socket(server);
sock.on("connection", function (socket) {
    console.log("made connection with socket " + socket.id);

    socket.on("test", function (data) {
        sock.sockets.emit("test", data);
    });
    // socket.on("chat", function (data) {
    //     sock.sockets.emit("chat", data);
    // });

    // socket.on("typing", function (data) {
    //     // send an event to everyone but the person who emitted the typing event to the server
    //     socket.broadcast.emit("typing", data);
    // });
});