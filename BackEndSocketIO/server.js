var express = require('express');
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server);


app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
 });

 io.on('connection', function (socket) {
   console.log("baglandi");
  socket.on('update', (data) => io.emit('update', {data}));
 });
 server.listen(3000);