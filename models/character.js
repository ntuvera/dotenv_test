var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.JAWSDB_URL || 'dotenv_db', 'root')

var Character = sequelize.define('Character', {
	name: {
		type: Sequelize.STRING,
		unique: true
	},
	age: {
		type: Sequelize.INTEGER
	}
});


sequelize.sync();

exports.character = Character;