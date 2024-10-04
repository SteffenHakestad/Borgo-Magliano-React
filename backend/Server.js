const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
dotenv.config();

//.env variables
const mongo_uri = process.env.mongo_uri;
const port = process.env.port;
const jwt_secret = process.env.jwt_secret;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json()); //Remove?
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "/uploads");
	},
	filename: (req, file, db) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage });

//Connect to MongoDB
mongoose
	.connect(mongo_uri, {})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("Failed to connect to MongoDB", err);
	});

// Define schemas and models
// News Post
const newsPostSchema = new mongoose.Schema(
	{
		newsHeadline: String,
		newsText: String,
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "newsPost" }
);
const NewsPost = mongoose.model("NewsPost", newsPostSchema);

// Event Post
const eventPostSchema = new mongoose.Schema(
	{
		eventHeadline: String,
		eventText: String,
		eventImage: String, //String is path to image location
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "eventPost" }
);

const EventPost = mongoose.model("EventPost", eventPostSchema);

// Route for posting new News Post
app.post("/api/news-posts", async (req, res) => {
	const { newsHeadline, newsText } = req.body;

	const newNewsPost = new NewsPost({
		newsHeadline,
		newsText,
	});

	try {
		await newNewsPost.save();
		res.status(201).send(newNewsPost);
	} catch (err) {
		res.status(400).send(err);
	}
});

// Route for fetching NewsPosts
app.get("/api/news-posts", async (req, res) => {
	try {
		const newsPosts = await NewsPost.find().sort({ createdAt: -1 });
		res.status(200).send(newsPosts);
	} catch (err) {
		res.status(400).send(err);
	}
});

// // Route for posting new EventPost
// app.post(
// 	"/api/event-posts",
// 	upload.fields([
// 		{ name: "image", maxCount: 1 },
// 	]),
// 	async (req, res) => {
// 		const { eventHeadline, eventText } = req.body;
// 		const imagePath = req.files.image ? req.files.image[0].path : "";

// 		const newPost = new MediaPost({
// 			headline,
// 			mediaText,
// 			image: imagePath,
// 			video: videoPath,
// 		});

// 		try {
// 			await newPost.save();
// 			res.status(201).send(newPost);
// 		} catch (err) {
// 			res.status(400).send(err);
// 		}
// 	}
// );

// // Route for fetching Event Posts
// app.get("/api/media-posts", async (req, res) => {
// 	try {
// 		const posts = await MediaPost.find().sort({ createdAt: -1 });
// 		res.status(200).send(posts);
// 	} catch (err) {
// 		res.status(400).send(err);
// 	}
// });

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
