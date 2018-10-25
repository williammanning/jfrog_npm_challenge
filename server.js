var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
