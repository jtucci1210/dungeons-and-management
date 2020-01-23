var socket = io.connect("http://localhost:3000");

socket.emit("test", {
    message: "Banana"
});

socket.on("test", function (data) {
    console.log(data);
});