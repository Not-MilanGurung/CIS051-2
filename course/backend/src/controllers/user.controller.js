const userService = require('../services/user.service');
const store = require('../data/store');

const getAllUsers = (req, res) => {
	const users = userService.getAllUsers();
	res.status(200).json(users);
};

const getUserById = (req, res) => {
	const id = req.params.id;
	const user = userService.getUserById(id);
	if (!user) {
		return res.status(404).json( { error: "User not found"});
	}
	res.status(200).json(user);
};

const createUser = (req, res) => {
	const name = req.body.name;
	const email = req.body.email;

	if (!name || !email) {
		return res.status(400).json({error: "Insufficient fields"});
	}

	const newUser = userService.createUser({name, email});
	res.status(201).json(newUser);
}

module.exports = {
	getAllUsers,
	getUserById,
	createUser
};
