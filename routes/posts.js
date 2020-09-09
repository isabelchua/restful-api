const express = require("express");

const router = express.Router();
const Post = require("../models/Post");

// router.get("/", (req, res) => {
// 	res.send("hello!");
// });

// GET ALL POSTS
router.get("/", async (req, res) => {
	//res.send("we are in posts!");
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.json({ message: err });
	}
});

// router.get("/s", (req, res) => {
// 	res.send("we are in s!");
// });

// SUBMIT POST
router.post("/", async (req, res) => {
	//console.log(req.body);
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (err) {
		res.json({ message: err });
	}
	// .then(data => {
	// 	res.json(data);
	// })
	// .catch(err => {
	// 	res.json({ message: err });
	// });
});

// SPECIFIC POST
router.get("/:postId", async (req, res) => {
	//console.log(req.params.postId);
	try {
		const post = await Post.findById(req.params.postId);
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});
// Delete post

router.delete("/:postId", async (req, res) => {
	try {
		const removedPost = await Post.deleteOne({ _id: req.params.postId });
		res.json(removedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

// update a post
router.patch("/:postId", async (req, res) => {
	try {
		const updatedPost = await Post.updateOne(
			{ _id: req.params.postId },
			{ $set: { title: req.body.title } }
		);
		res.json(updatedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
