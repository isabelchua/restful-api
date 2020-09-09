const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
// 	res.send("hello!");
// });

router.get("/", (req, res) => {
	res.send("we are in posts!");
});

router.get("/s", (req, res) => {
	res.send("we are in s!");
});

module.exports = router;
