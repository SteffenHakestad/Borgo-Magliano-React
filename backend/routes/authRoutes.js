const express = require("express");
const router = express.Router();
const cors = require("cors");
const { registerUser, loginUser } = require("../controllers/authController");

//middleware
router.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	})
);

router.post("/member", registerUser);
router.post("/member", loginUser);
module.exports = router;
