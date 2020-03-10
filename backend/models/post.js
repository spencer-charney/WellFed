const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Post", postSchema);


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const postSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     text: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String
//     },
//     comments: [
//         {
//             user: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'users'
//             },
//             text: {
//                 type: String,
//                 required: true
//             },
//             name: {
//                 type: String
//             },
//             date: {
//                 type: Date,
//                 default: Date.now
//             }
//         }
//     ],
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = Post = mongoose.model('posts', postSchema);