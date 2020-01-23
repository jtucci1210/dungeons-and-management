//Library Imports
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

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

//Websockets
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});


http.listen(8080, function () {
    console.log('listening on *:8080');
});


//Routes
app.use("/api/users", users);
app.use("/api/characters", characters);
app.use("/api/campaigns", campaigns);