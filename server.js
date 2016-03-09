var express = require('express');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8080;

var app = express();

// app.use(bodyParser.urlencoded({ extended: false }))
 
var connection = new Sequelize(process.env.JAWSDB_URL || 'dotenv_db', 'root');
// var Character = require('./models/character.js');

var Character = connection.define('Character', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  age: {
    type: Sequelize.INTEGER
  }
});


if (connection) { 
	console.log('connection made')

} else {
	console.log("we've got nothin'")
}

// console.log("here's what's in process.env: " + JSON.stringify(process.env));
console.log("here's what JAWSDBURL is: " + process.env.JAWSDB_URL)

app.get('/', function(req, res) {
  console.log('"/" route hit;');
  res.send("Hello World");
});

app.get('/:name/:age', function(req, res) {
  // console.log(req.params);
  if (req.params.age && req.params.name){
    Character.create({
      name: req.params.name,
      age: req.params.age
    })
  }
})


app.listen(PORT, function() {
	console.log("Listening on: " + PORT);
})