const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	postedBy: {
		type: ObjectId,
		ref: "User"
	},
	dish: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	tags: {
		type: [String]
    },
    body: {
        type: String, 
        required: true
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
module.exports = mongoose.model("Review", reviewSchema);