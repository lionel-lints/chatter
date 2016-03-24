'use strict';

const express = require(express);
const app = express();
const http = require('http');

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.listen(app.get('port'), function() {
  console.log('Listening on', app.get('port'));
});
