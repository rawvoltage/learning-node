var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../bootstrap/')));
app.use(bodyParser());

app.use(require('./todos'));


app.listen(8000, function() {
    console.log('ready');
});

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": 'text/plain'});
    response.end('Hello World\n');
    
    http.get({host: 'google.com'}, function(res) {
        console.log(res.headers);
    });
});

//var froot = http.get(function() {
//    alert('test');
//});

server.listen(7000);