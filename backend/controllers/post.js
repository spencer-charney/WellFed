const { addNotification } = require('./user');
const Post = require('../models/post');


exports.postById = (req, res, next, id) => {
	Post.findById(id)
	.populate("postedBy", "_id username")
	.exec((err, post) => {
		if (err || !post) {
			return res.status(400).json({
				error: err
			});
		}

		req.post = post;
		next();
	});
}

exports.getPosts = (req, res) => {
	Post.find()
	.populate('postedBy', '_id username')
	.exec((err, posts) => {
		if (err || !posts) {
			return res.status(400).json({
				error: err
			});
		}
		res.status(200).json({posts});
	});
}

exports.createPost = (req, res, next) => {
	const post = new Post(req.body);
	post.postedBy = req.profile;
	
    post.save((err,result) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
        res.json({
            post: result
        });
    });
}

exports.postsByUser = (req, res) => {
	Post.find({postedBy: req.profile._id})
		.populate("postedBy", "_id username")
		.sort("_created")
		.exec((err, posts) => {
			if (err) {
				return res.status(400).json({
					error: err
				});
			}
			res.json(posts);
		});
};

exports.isPoster = (req, res, next) => {
	let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;
	if (!isPoster) {
		return res.status(403).json({
			error: "User is not authorized"
		});
	}

	next();
};

exports.updatePost = (req, res, next) => {
	let post = req.post;
	post = _.extend(post, req.body);
	post.updated = Date.now();
	post.save(err => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
		res.json(post);
	});
};


exports.deletePost = (req, res) => {
	let post = req.post;
	post.remove((err, post) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
		res.json({
			message: "Post deleted successfully"
		});
	});
};

exports.comment = (req, res) => {
	console.log(req.body);

    Post.findByIdAndUpdate(req.body.postId, { $push: { comments: req.body.comment } }, { new: true })
		.populate('postedBy')
        .exec((err, result) => {
            if (err) {
				console.log(err);
                return res.status(400).json({
                    error: err
                });
            } else {
				const notification = {
					type: "newComment",
					username: req.body.comment.username,
					message: req.body.comment.comment
				}
				addNotification(result.postedBy._id, notification);
                res.json(result);
            }
		});
	
		
	
};

exports.uncomment = (req, res) => {
    let comment = req.body.comment;

    Post.findByIdAndUpdate(req.body.postId, { $pull: { comments: { _id: comment._id } } }, { new: true })
        .populate('comments.user', '_id name')
        .populate('postedBy', '_id name')
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            } else {
                res.json(result);
            }
        });
};