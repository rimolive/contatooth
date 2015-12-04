var http = require('http');
var express = require('express');
var app = require('./config/express')(app);
require('./config/passport')();
require('./config/database.js')('mongodb://admin:RQayuslUdchmbOYX@172.30.253.38/contatooth');

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server escutando na porta ' + app.get('port'));
});
