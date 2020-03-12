const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	serves: {
		type: Number,
		required: true
	},
	tags: {
		type: [String],
		required: true
	},
	ingredients: {
		type: [String],
		required: true
	},
	directions: {
		type: [String],
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = mongoose.model("Post", postSchema);