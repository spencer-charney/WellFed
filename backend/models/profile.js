// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const profileSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     dogears: [
//         {
//             post: {
//                 type: Schema.Types.ObjectId,
//                 ref: 'posts'
//             }
//         }
//     ],
//     restrictions: {
//         type: [String]
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// module.exports = Profile = mongoose.model('profiles', profileSchema)