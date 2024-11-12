const User = require("../models/User");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

//Registration Endpoint
const registerUser = async (req, res) => {
	try {
		const {
			name,
			email,
			phone,
			address,
			password,
			profilePic,
			repeatPassword,
		} = req.body;

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
		//Check if phone was entered
		if (!phone) {
			return res.json({
				error: "Phone number is required(T)",
			});
		}
		if (phone.length < 4) {
			return res.json({
				error:
					"Phone number is too short. Please enter a valid phone number(T)",
			});
		}
		//Check if phone number is acceptable and not taken
		const phoneExists = await User.findOne({ phone });
		if (phoneExists) {
			return res.json({
				error: "A user with that phone number already exists(T)",
			});
		}

		//Hash the password from data
		const hashedPassword = await hashPassword(password);

		//Create user in DB
		const user = await User.create({
			name,
			email,
			phone,
			address: "",
			profilePic: "",
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
			jwt.sign(
				{ email: user.email, name: user.name, phone: user.phone, id: user._id },
				process.env.jwt_secret,
				{},
				(err, token) => {
					if (err) throw err;
					res
						.cookie("token", token, {
							sameSite: "Lax", // or "Lax" if cross-site requests are not needed
						})
						.json(user);
				}
			);
			// res.json("Passwords match");
		} else {
			res.json({
				error: "Wrong Password",
			});
		}
	} catch (error) {
		console.log("AutController Error: " + error);
	}
};
//Logout endpoint
const logoutUser = (req, res) => {
	res
		.clearCookie("token", {
			sameSite: "Lax", // or "Lax" if cross-site requests are not needed
		})
		.json({ message: "User logged out successfully" });
};

//Update Profile Endpoint
const updateProfile = async (req, res) => {
	try {
		const userId = req.user.id;
		const { name, phone, address } = req.body;

		// console.log("Received data:", { name, phone, address });
		// console.log("Received file:", req.file);

		const updateData = {
			...(name && { name }),
			...(phone && { phone }),
			...(address && { address }),
		};

		// If the user selected an image handle it
		if (req.file) {
			updateData.profilePic = `/uploads/${req.file.filename}`;
		}

		//Check if phone number is acceptable and not taken (by a different user) current user can update the DB with an already existing number as long as it's that user's number.
		const phoneExists = await User.findOne({ phone });
		if (phoneExists && phoneExists._id.toString() !== userId) {
			return res.json({
				error: "A user with that number already exists(T)",
			});
		} else if (phoneExists && phoneExists._id.toString() === userId) {
			console.log("The phone number exists but belongs to current user.");
		}
		const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
			new: true,
		});
		res.json(updatedUser);
	} catch (error) {
		console.error("Error updating profile:", error);
		res.status(500).json({ error: "Failed to update profile" });
	}
};

// Get profile endpoint
const getProfile = (req, res) => {
	const { token } = req.cookies;

	if (token) {
		jwt.verify(token, process.env.jwt_secret, {}, async (err, decoded) => {
			if (err) {
				console.error("Token verification error:", err);
				return res.status(403).json({ error: "Unauthorized" });
			}

			try {
				// Fetch the full user data using the decoded user ID
				const user = await User.findById(decoded.id);
				if (!user) {
					return res.status(404).json({ error: "User not found" });
				}

				// Return the full user data
				res.json(user);
			} catch (error) {
				console.error("Error fetching user profile:", error);
				res.status(500).json({ error: "Failed to retrieve profile data" });
			}
		});
	} else {
		res.status(401).json({ error: "No token provided" });
	}
};

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	getProfile,
	updateProfile,
};
