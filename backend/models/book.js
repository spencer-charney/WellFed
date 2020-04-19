const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    name: String,
    posts: [
        {
            type: ObjectId,
            ref: 'Post'
        }
    ]
})


module.exports = mongoose.model('Book', bookSchema);