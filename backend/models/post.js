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
			comment: String,
			time: {
				type: Date,
				default: Date.now
			},
			username: String
		}
	],
	restaurant: {
		type: String,
	},
	dish: {
		type: String,
	},
	rate: {
		type: String,
	},
    review: {
        type: String, 
    }
});

module.exports = mongoose.model("Post", postSchema);