const userService = require('../services/user.service');
const store = require('../data/store');

const getAllUsers = async (req, res) => {
	try{
		const users = await userService.getAllUsers();
		res.status(200).json(users);
	} catch (err){
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const getUserById = async (req, res) => {
	try{
		const id = req.params.id;
		const user = await userService.getUserById(id);
		if (!user) {
			return res.status(404).json( { error: "User not found"});
		}
		res.status(200).json(user);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const createUser = async (req, res) => {
	try{
		const name = req.body.name;
		const email = req.body.email;
		const password = req.body.password;
	
		if (!name || !email || !password) {
			return res.status(400).json({error: "Insufficient fields"});
		}
	
		const newUser = await userService.createUser({name, email, password});
		res.status(201).json(newUser);
	} catch(err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
}

const updateUser = async (req, res) => {
	try{
		const id = req.params.id;
		const name = req.body.name;
		const email = req.body.email;
		const password = req.body.passowrd;

		if (!name && !email && !password) {
			return res.status(400).json({ error: "One updated field is required"});
		};
		const update = {};
		if (name) update.name = name;
		if (email) update.email = email;
		if (password) update.password = password;

		const updatedUser = await userService.updateUser(id, update);
		res.status(200).json(updatedUser);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const deleteUserById = async (req, res) => {
	try {
		const id = req.params.id;
		const deletedUser = await userService.deleteUserById(id);
		if (!deletedUser) {
			res.status(404).json({ error: "User not found"});
		}
		res.status(200).json({ message: "Deleted the user"});
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
}

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUserById
};
