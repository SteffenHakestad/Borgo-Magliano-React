const mongoose = require("mongoose");
const { Schema } = mongoose;

//User Schema
const userSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		unique: true,
	},
	phone: {
		type: String,
		unique: true,
	},
	address: String,
	profilePic: String,
	password: String,
	repeatPassword: String,
	createdAt: { type: Date, default: Date.now },
});
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
