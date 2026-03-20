require('dotenv/config');

const config = {
	PORT: process.env.PORT || 5000,
	NODE_ENV: process.env.NODE_ENV || "development",

	DB_URL: process.env.DB_URL,

	JWT_SECRET: process.env.JWT_SECRET,
	JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',

	CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
};

module.exports = config;