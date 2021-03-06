const _ = require('lodash');
const User = require("../models/user");
const Book = require('../models/book')

exports.userById = (req, res, next, id) => {
	User.findById(id)
	.populate('following', '_id name')
    .populate('followers', '_id name')
    .populate({
        path: 'myBooks',
        populate: { path: 'posts' }
    })
	.exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: "User not found"
			});
		}
        req.profile = user; //adds profile object in req with user info
		next();
	});
};

exports.searchUsers = (req, res) => {
    let username = req.body.username;
    console.log(req.body);
    User.find({'username': new RegExp(username, 'i')}, 'username _id', (err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Users not found"
            })
        }
        else {
            res.json(data);
        }
    });
}

exports.hasAuthorization = (req, res, next) => {
	const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
	if (!authorized) {
		return res.status(403).json({
			error: "User is not authorized to perform this action."
		})
	}
};

exports.allUsers = (req, res) => {
	User.find((err, users) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}

		res.json(users);
	}).select("name email updated created")
};

exports.getUser = (req, res) => {
	req.profile.hashed_password = undefined;
	req.profile.salt = undefined;
	return res.json(req.profile);
};

exports.getUsername = (req, res) => {
    User.findOne({'username': req.body.username}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        else {
            data.hashed_password = undefined;
            data.salt = undefined;
            res.json(data);
        }
    })
}

exports.updateUser = (req, res, next) => {
	let user = req.profile;
	user = _.extend(user, req.body);
	user.updated = Date.now()
	user.save((err) => {
		if (err) {
			return res.status(400).json({
				error: "You are not authorized to perform this action."
			});
		}
		user.hashed_password = undefined;
		user.salt = undefined;
		res.json({ user });
	})
};

exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ message: 'User deleted successfully' });
    });
};

exports.addFollowing = (req, res, next) => {
    console.log(req.body);
    User.findByIdAndUpdate(req.body.userId, { $addToSet: { following: req.body.followId } }, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err });
        }
        next();
    });
};

exports.addFollower = (req, res) => {
    User.findByIdAndUpdate(req.body.followId, { $addToSet: { followers: req.body.userId } }, { new: true })
        .populate('following', '_id username')
        .populate('followers', '_id username')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            console.log("HELLO HERE")
            console.log(req.body);
        const notification = {
            type: "newFollow",
            username: req.body.username,
            message: ""
        }
        this.addNotification(req.body.followId, notification);

        result.hashed_password = undefined;
        result.salt = undefined;
        res.json(result);
    });


};

exports.removeFollowing = (req, res, next) => {
    User.findByIdAndUpdate(req.body.userId, { $pull: { following: req.body.unfollowId } }, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err });
        }
        next();
    });
};

exports.removeFollower = (req, res) => {
    User.findByIdAndUpdate(req.body.unfollowId, { $pull: { followers: req.body.userId } }, { new: true })
        .populate('following', '_id name')
        .populate('followers', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            result.hashed_password = undefined;
            result.salt = undefined;
            res.json(result);
        });
};

exports.createBook = (req, res) => {
    let book = new Book({name: req.body.name});
    book.save();
    let bookId = book._id;
    User.findByIdAndUpdate(req.body.userId, {$push: { myBooks: bookId }}, { new: true })
    .exec((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        result.hashed_password = undefined;
        result.salt = undefined;
        res.json(result);
    }); 
}

exports.populateBook = (req, res) => {
    Book.findByIdAndUpdate(req.body.bookId, {$addToSet: { posts: req.body.postId }}, {new: true})
    .populate({
        path: 'posts',
        populate: { path: 'postedBy' }
    })
    .exec((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        else {
            result.posts.forEach(post => {
                if (post._id == req.body.postId) {
                    const notification = {
                        type: "newBookmark",
                        username: req.body.username,
                        message: req.body.postTitle
                    }
                    this.addNotification(post.postedBy._id, notification);
                }
            })
            res.json(result);
        }
    });
}

exports.addNotification = (userId, notification) => {
    User.findByIdAndUpdate(userId, { 
        $push: {
            notifications: notification
        } 
    })
    .populate('notifications.user')
    .populate('notifications.post')
    .exec((err, result) => {
        if (err) {
            return res.status(400).json({ error: err });
        }
        console.log(result);
    });
    
};
