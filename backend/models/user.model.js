const mongoose = require('mongoose');
require('mongoose-type-email');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required: [true, "Username is required"], 
        index: true
    },
    email: {
        type: mongoose.SchemaTypes.Email, 
        unique: true, 
        required: [true, "Email is required"], 
        index: true
    },
    hased_password: {
        type: String,
        required: [true, "Password is required"]
    },
    salt: String
}, {timestamps: true});



mongoose.model("User", userSchema);