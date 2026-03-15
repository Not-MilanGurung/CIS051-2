// const store = require('../data/store');
// const {v4 : uuidv4} = require('uuid');

const User = require('../models/user.models');

const getAllUsers = async () => {
	return await User.find();
}

const getUserById = async (id) => {
	return await User.findById(id);
} 

const createUser = async (data) => {
	const newUser = new User({
		name: data.name,
		email: data.email,
		password: data.password
	});

	return await newUser.save();
}

const updateUser = async (id, data) => {
	const updatedUser = await User.findByIdAndUpdate(id,data);
	return updatedUser;
}

const deleteUserById = async (id) => {
	const deletedUser = await User.findByIdAndDelete(id);
	return deletedUser;
}

module.exports = { 
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUserById
};

// const getAllUsers = () => {
// 	return store.users;
// };

// const getUserById = (id) => {
// 	return store.users.find((user) => user.id === id);
// }

// const createUser = (data) => {
// 	const newUser = {
// 		id: uuidv4(),
// 		name: data.name,
// 		email: data.email,
// 		createdAt: new Date().toISOString(),
// 	};
// 	store.users.push(newUser);
// 	return newUser;
// }

