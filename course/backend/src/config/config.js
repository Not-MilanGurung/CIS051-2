require('dotenv/config');

const config = {
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	JWT_EXPIRES_IN: process.env.JWT_SECRET
};

module.exports = config;