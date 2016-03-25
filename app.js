'use strict';

const express = require('express');
const app = express();
const http = require('http');
http.createServer(function(){});
const io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
});

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(app.get('port'), function() {
  console.log('Listening on', app.get('port'));
});
