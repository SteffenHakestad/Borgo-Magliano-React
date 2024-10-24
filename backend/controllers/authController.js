const User = require("../models/User");
const { hashPassword, comparePassword } = require("../helpers/auth");

//Registration Endpoint
const registerUser = async (req, res) => {
	try {
		const { name, email, phone, password, repeatPassword } = req.body;
		//Check if name was entered
		if (!name) {
			return res.json({
				error: "Name is required(T)",
			});
		}
		//Check if password is acceptable
		if (!password) {
			return res.json({
				error: "Password is required(T)",
			});
		}
		if (password.length < 1) {
			//Change this to 6,
			return res.json({
				error:
					"Password is too short. Password needs to be at least 6 characters long(T)",
			});
		}
		if (password != repeatPassword) {
			return res.json({
				error: "Passwords do not match(T)",
			});
		}
		//Check if email was entered
		if (!email) {
			return res.json({
				error: "Email is required(T)",
			});
		}
		//Check if email is acceptable and not taken
		const emailExists = await User.findOne({ email });
		if (emailExists) {
			return res.json({
				error: "A user with that email already exists(T)",
			});
		}
		//Check if phone number is acceptable and not taken
		const phoneExists = await User.findOne({ phone });
		if (phoneExists) {
			return res.json({
				error: "A user with that phone number already exists(T)",
			});
		}

		const hashedPassword = await hashPassword(password);

		//Create user in DB
		const user = await User.create({
			name,
			email,
			phone,
			password: hashedPassword,
		});
		return res.json(user);
	} catch (error) {
		console.log("Error in authController: " + error);
	}
};

//Login endpoint
const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		//Check if email was entered
		if (!email) {
			return res.json({
				error: "Email is required(T)",
			});
		}
		//Check if password was entered
		if (!password) {
			return res.json({
				error: "Password is required(T)",
			});
		}
		//Check if email exists
		const user = await User.findOne({ email });
		if (!user) {
			return res.json({
				error: "No user found",
			});
		}
		//Check if passwords match
		const match = await comparePassword(password, user.password);
		if (match) {
			//Cookie for you
			res.json("Passwords match");
		} else {
			res.json({
				error: "Wrong Password",
			});
		}
	} catch (error) {
		console.log("AutController Error: " + error);
	}
};

module.exports = {
	registerUser,
	loginUser,
};
