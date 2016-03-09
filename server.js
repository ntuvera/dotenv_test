var express = require('express');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

var connection = new Sequelize(process.env.JAWSDB_URL || 'dotenv_db', 'root');

if (connection) { 
	console.log('connection made')
} else {
	console.log("we've got nothin'")
}

// console.log("here's what's in process.env: " + JSON.stringify(process.env));
console.log("here's what JAWSDBURL is: " + process.env.JAWSDB_URL)

app.get('/', function(req, req) {
  res.send("Hello World");
});


app.listen(PORT, function() {
	console.log("Listening on: " + PORT);
})