const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/config');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
			maxlength: [50, 'Name cannot be more than 50 characters'],
		},
		email: {
			type: String,
			required: [true, 'Please provide an email'],
			unique: true,
			lowercase: true,
			trim: true,
			match: [
				/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
				"Please provide a valid email",
			]
		},
		password: {
			type: String,
			required: [true, 'Please provide a password'],
			minlength: [8, "Password must be at least 8 characters"],
			select: false,
		},
		role: {
			type: String,
			enum: ['student', 'teacher', 'admin'],
			default: 'student',
		},
		avatar: {
			type: String,
			default: null,
		},
		phone: {
			type: String,
			default: null,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	},
);

userSchema.pre('save', async function() {
	if (!this.isModified('password')) return;
	
	try{
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
	} catch (error) {
		throw error;
	}
});

userSchema.methods.comparePassword = async function(candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateToken = function () {
	return jwt.sign(
		{
			id: this._id,
			email: this.email,
			role: this.role,
		},
		JWT_SECRET,
		{
			expiresIn: JWT_EXPIRES_IN,
		}
	);
};

userSchema.methods.toJSON = function () {
	const userObject = this.toObject();
	delete userObject.password;
	delete userObject.__v;
	return userObject;
}

const User = mongoose.model('User', userSchema);

module.exports = User;