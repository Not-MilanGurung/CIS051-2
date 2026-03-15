const express = require('express');
const app = express();

const db = require('./src/config/database');
const PORT = require('./src/config/config').PORT;

const userRoutes = require("./src/routes/user.routes");

app.use(express.json());
app.use('/users', userRoutes);


app.listen(PORT, () => {
	console.log(`The server is running on port ${PORT}`);
});