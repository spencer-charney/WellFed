const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true
	},
	restaurant: {
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
	rate: {
		type: String,
		required: true
	},
	tags: {
		type: String
    },
    review: {
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