var express = require('express');
var Sequelize = require('sequelize');
var PORT = process.env.PORT || 8080;

var app = express();

var connection = new Sequelize('dotenv_db', 'root');

if (connection) { 
	console.log('connection made')
} else {
	console.log("we've got nothin'")
}

app.listen(PORT, function() {
	console.log("Listening on: " + PORT);
})