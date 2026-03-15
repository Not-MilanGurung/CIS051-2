const mongoose = require('mongoose');
require('dotenv/config');

const db_url = process.env.DB_URL || "mongodb://127.0.0.1:27017/courseManagement";

mongoose.connect(db_url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
	console.log('Database connected');
});

module.exports = db;