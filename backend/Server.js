const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
dotenv.config();

// .env variables
const mongo_uri = process.env.mongo_uri;
const port = process.env.port || 3001;

// Make uploads directory exists, if not create directory
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadsDir));

// Multer configuration
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadsDir);
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage });

// Connect to MongoDB
mongoose
	.connect(mongo_uri, {})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("Failed to connect to MongoDB", err);
	});

// Define schemas and models

// News Post Schema
const newsPostSchema = new mongoose.Schema(
	{
		newsHeadline: String,
		newsText: String,
		newsImage: String, // Path to image location
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "newsPost" }
);
const NewsPost = mongoose.model("NewsPost", newsPostSchema);

// Event Post Schema
const eventPostSchema = new mongoose.Schema(
	{
		eventHeadline: String,
		eventText: String,
		eventImage: String, // Path to image location
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "eventPost" }
);
const EventPost = mongoose.model("EventPost", eventPostSchema);

// Gallery Post Schema
const galleryPostSchema = new mongoose.Schema(
	{
		galleryImage: String, // Path to image location
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "galleryPost" }
);
const GalleryPost = mongoose.model("GalleryPost", galleryPostSchema);

// Blog Post Schema
const blogPostSchema = new mongoose.Schema(
	{
		blogHeadline: String,
		blogText: String,
		blogImage: String, // Path to image location
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "blogPost" }
);
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// Routes

// Route for posting new News Post

app.post(
	"/api/news-posts",
	upload.fields([{ name: "image", maxCount: 1 }]),
	async (req, res) => {
		const { newsHeadline, newsText } = req.body;
		const selectedImage = req.files.image
			? `/uploads/${req.files.image[0].filename}`
			: "";

		const newNewsPost = new NewsPost({
			newsHeadline,
			newsText,
			newsImage: selectedImage,
			//createdAt,
		});

		try {
			await newNewsPost.save();
			res.status(201).send(newNewsPost);
		} catch (err) {
			console.error("Error saving NewsPost:", err);
			res.status(400).send({ message: "Bad Request", error: err });
		}
	}
);

// Route for fetching NewsPosts
app.get("/api/news-posts", async (req, res) => {
	try {
		const newsPosts = await NewsPost.find().sort({ createdAt: -1 });
		res.status(200).send(newsPosts);
	} catch (err) {
		console.error("Error fetching NewsPosts:", err);
		res.status(400).send({ message: "Bad Request", error: err });
	}
});

// Route for posting new EventPost
app.post(
	"/api/event-posts",
	upload.fields([{ name: "image", maxCount: 1 }]),
	async (req, res) => {
		const { eventHeadline, eventText } = req.body;
		const selectedImage = req.files.image
			? `/uploads/${req.files.image[0].filename}`
			: "";

		const newEventPost = new EventPost({
			eventHeadline,
			eventText,
			eventImage: selectedImage,
		});

		try {
			await newEventPost.save();
			res.status(201).send(newEventPost);
		} catch (err) {
			console.error("Error saving EventPost:", err);
			res.status(500).send({ message: "Internal Server Error", error: err });
		}
	}
);

// Route for fetching Event Posts
app.get("/api/event-posts", async (req, res) => {
	try {
		const eventPosts = await EventPost.find().sort({ createdAt: -1 });
		res.status(200).send(eventPosts);
	} catch (err) {
		console.error("Error fetching EventPosts:", err);
		res.status(400).send({ message: "Bad Request", error: err });
	}
});

// Route for posting new GalleryPost
app.post(
	"/api/gallery-posts",
	upload.fields([{ name: "image", maxCount: 1 }]),
	async (req, res) => {
		const selectedImage = req.files.image
			? `/uploads/${req.files.image[0].filename}`
			: "";

		const newGalleryPost = new GalleryPost({
			galleryImage: selectedImage,
			// createdAt,
		});

		try {
			await newGalleryPost.save();
			res.status(201).send(newGalleryPost);
		} catch (err) {
			console.error("Error saving GalleryPost:", err);
			res.status(500).send({ message: "Internal Server Error", error: err });
		}
	}
);

// Route for fetching Gallery Posts
app.get("/api/gallery-posts", async (req, res) => {
	try {
		const galleryPosts = await GalleryPost.find().sort({ createdAt: -1 });
		res.status(200).send(galleryPosts);
	} catch (err) {
		console.error("Error fetching GalleryPosts:", err);
		res.status(400).send({ message: "Bad Request", error: err });
	}
});

// Route for posting new BlogPost
app.post(
	"/api/blog-posts",
	upload.fields([{ name: "image", maxCount: 1 }]),
	async (req, res) => {
		const { blogHeadline, blogText } = req.body;
		const selectedImage = req.files.image
			? `/uploads/${req.files.image[0].filename}`
			: "";

		const newBlogPost = new BlogPost({
			blogHeadline,
			blogText,
			blogImage: selectedImage,
		});

		try {
			await newBlogPost.save();
			res.status(201).send(newBlogPost);
		} catch (err) {
			console.error("Error saving BlogPost:", err);
			res.status(500).send({ message: "Internal Server Error", error: err });
		}
	}
);

// Route for fetching Blog Posts
app.get("/api/blog-posts", async (req, res) => {
	try {
		const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
		res.status(200).send(blogPosts);
	} catch (err) {
		console.error("Error fetching BlogPosts:", err);
		res.status(400).send({ message: "Bad Request", error: err });
	}
});

//Listen to port (.env variable) Remove Localhost when it's no longer used.
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
