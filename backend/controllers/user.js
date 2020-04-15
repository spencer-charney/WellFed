const _ = require('lodash');
const User = require("../models/user");

exports.userById = (req, res, next, id) => {
	User.findById(id)
	.populate('following', '_id name')
	.populate('followers', '_id name')
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
    User.findByIdAndUpdate(req.body.userId, { $push: { following: req.body.followId } }, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err });
        }
        next();
    });
};

exports.addFollower = (req, res) => {
    User.findByIdAndUpdate(req.body.followId, { $push: { followers: req.body.userId } }, { new: true })
        .populate('following', '_id username')
        .populate('followers', '_id username')
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

    const notification = {
        type: "newFollow",
        username: req.body.userId,
        message: ""
    }
    this.addNotification(req.body.followId, notification);
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
    User.findByIdAndUpdate(req.body.userId, {$push: {
        myBooks: {
            name: req.body.name,
            posts:[]
        }
    }}, { new: true }, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
        }
    }); 
}

exports.populateBookmark = (req, res) => {

}


exports.addNotification = (userId, notification) => {
    console.log("NOTIFICATION")
    console.log(notification);
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

