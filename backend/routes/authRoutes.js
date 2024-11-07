const express = require("express");
const router = express.Router();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const {
	registerUser,
	loginUser,
	logoutUser,
	getProfile,
	updateProfile,
} = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

// Multer configuration
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage });

// Middleware
router.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	})
);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logoutUser);
router.post(
	"/update-profile",
	authenticateToken,
	upload.single("profilePic"),
	updateProfile
);

module.exports = router;
