const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		minlength: [10, "The joke must be at leats 10 characters "]
	},
	punchline: {
		type: String,
		minlength: [3, "The punchline must be 3 characters at leats"]
	}
});


const Joke = mongoose.model("Jock", jokeSchema);

module.exports = Joke;