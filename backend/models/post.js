const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: ObjectId,
		ref: "User"
	},
	body: {
		type: String,
		required: true
	},
	photo: {
		type: Buffer,
		contentType: String
	},
	time: {
		type: String
	},
	serves: {
		type: Number
	},
	tags: {
		type: [String]
	},
	ingredients: {
		type: [String]
	},
	directions: {
		type: [String]
	},
	created: {
		type: Date,
		default: Date.now
	}

});

module.exports = mongoose.model("Post", postSchema);