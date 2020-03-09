const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    username: {
        type: String,
        required: true
    },
    dogears: {
        type: [Schema.Types.ObjectId],
        ref: 'post'
    },
    restrictions: {
        type: [String]
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = profile = mongoose.model('profile', profileSchema)