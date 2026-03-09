// const calculate = require('./calculate')

// const {sum, ...extra} = calculate;

// console.log(sum(4, 5));

// const {subtract, mult} = extra;
// console.log(subtract(4, 5));
// console.log(mult(4, 5));

const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {"content-type" : "text/plain"});
	res.end("Hellow world");
});

server.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
})