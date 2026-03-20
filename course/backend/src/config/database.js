const mongoose = require('mongoose');
const { DB_URL } = require('./config');

const db_url = DB_URL;

mongoose.connect(db_url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
	console.log('Database connected');
});

module.exports = db;