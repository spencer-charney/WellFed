const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    
}, {timestamps: true});

mongoose.model("Post", postSchema);