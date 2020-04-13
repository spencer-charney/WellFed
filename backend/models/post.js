const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
	type: {
		type: String,
	},
	title: {
		type: String,
	},
	postedBy: {
		type: ObjectId,
		ref: "User"
	},
	description: {
		type: String,
	},
	totalTime: {
		type: String
	},
	serves: {
		type: String
	},
	tags: {
		type: String
	},
	ingredients: {
		type: String
	},
	directions: {
		type: String
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