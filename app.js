const express = require("express");

const app = express();
const mongoose = require("mongoose");

require("dotenv/config");

app.use(express.json());

// Middlewares
// app.use("/posts", () => {
// 	console.log("this is the middleware");
// });

// import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
	res.send("hello!");
});

// connect to db
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("Connected to DB!")
);

// listen  to server
app.listen(3000);
