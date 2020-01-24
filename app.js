//Library Imports
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const socket = require("socket.io");

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
const sock = socket(server);

//Socket Emitters
sock.on("connection", function (socket) {
    console.log("made connection with socket " + socket.id);

    socket.on("hp", function (data) {
        sock.sockets.emit("hp", data);
    });

    socket.on("dice", function (data) {
        sock.sockets.emit("dice", data);
    });
});