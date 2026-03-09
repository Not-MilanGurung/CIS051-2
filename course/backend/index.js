// const calculate = require('./calculate')

// const {sum, ...extra} = calculate;

// console.log(sum(4, 5));

// const {subtract, mult} = extra;
// console.log(subtract(4, 5));
// console.log(mult(4, 5));

const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require("./src/routes/user.routes");

app.use(express.json());
app.use('/users', userRoutes);


app.listen(port, () => {
	console.log(`The server is running on port ${port}`);
})