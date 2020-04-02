const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	postedBy: {
		type: ObjectId,
		ref: "User"
	},
	body: {
		type: String,
		required: true
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
	},
	comments: [
		{
			text: String,
			created: {
				type: Date,
				default: Date.now
			},
			postBy: {
				type: ObjectId,
				ref: "User"
			}
		}
	]
});

module.exports = mongoose.model("Post", postSchema);