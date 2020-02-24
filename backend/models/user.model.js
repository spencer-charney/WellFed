var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, "is invalid"], 
        index: true
    },
    email: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, "is invalid"], 
        index: true
    }
}, {timestamps: true});
