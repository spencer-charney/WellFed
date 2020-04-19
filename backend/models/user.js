const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');
const crypto = require('crypto');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	hashed_password: {
		type: String,
		required: true
	},
	salt: String,
	created: {
		type: Date,
		default: Date.now
	},
	updated: Date,
	restrictions: [String],
	following: [{type: ObjectId, ref: "User"}],
	followers: [{type: ObjectId, ref: "User"}],
	notifications: [
		{
			type: {
				type: String,
				required: true
			},
			user: {
				type: ObjectId, 
				ref: "User"
			},
			username: {
				type: String
			},
			message: {
				type: String
			},
			time: {
				type: Date,
				default: Date.now,
			}
		}
	],
	myBooks: [{type: ObjectId, ref: 'Book'}]
})

//virtual field for password
userSchema.virtual('password')
.set(function(password) {
	//create temp variable
	this._password = password;

	this.salt = uuidv4();

	this.hashed_password = this.encryptPassword(password);
})
.get(function() {
	return this._password
})

userSchema.methods = {
	authenticate: function(plainText) {
		return this.encryptPassword(plainText) == this.hashed_password;
	},
	encryptPassword: function(password) {
		if(!password) return "";
		try {
			return crypto.createHmac('sha1', this.salt)
						.update(password)
						.digest('hex');
		}
		catch (err) {
			return ""
		}
	}
}


module.exports = mongoose.model('User', userSchema);