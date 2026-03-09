const store = require('../data/store');
const {v4 : uuidv4} = require('uuid');

const getAllUsers = () => {
	return store.users;
};

const getUserById = (id) => {
	return store.users.find((user) => user.id === id);
}

const createUser = (data) => {
	const newUser = {
		id: uuidv4(),
		name: data.name,
		email: data.email,
		createdAt: new Date().toISOString(),
	};
	store.users.push(newUser);
	return newUser;
}

module.exports = { 
	getAllUsers,
	getUserById,
	createUser
};
