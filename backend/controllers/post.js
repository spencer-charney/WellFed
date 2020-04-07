const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

exports.postById = (req, res, next, id) => {
	Post.findById(id)
	.populate("postedBy", "_id name")
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
	const posts = Post.find()
	.populate("postedBy", "_id name")
	.populate('comments', 'text created')
	.populate('comments.postedBy', '_id name')
	.select('_id title description serves tags ingredients directions totalTime created')
	.then((posts) => {
		res.status(200).json({post: posts});
	})
	.catch(err => console.log(err));
}

exports.createPost = (req, res, next) => {
    // let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: err
    //         });
    //     }
    //     let post = new Post(fields);

    //     req.profile.hashed_password = undefined;
    //     req.profile.salt = undefined;
    //     post.postedBy = req.profile;

    //     post.save((err, result) => {
    //         if (err) {
    //             return res.status(400).json({
    //                 error: err
    //             });
    //         }
    //         res.json(result);
    //     });
	// });
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
		.populate("postedBy", "_id name")
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
    let comment = req.body.comment;
    comment.postedBy = req.body.userId;

    Post.findByIdAndUpdate(req.body.postId, { $push: { comments: comment } }, { new: true })
        .populate('comments.postedBy', '_id name')
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

exports.uncomment = (req, res) => {
    let comment = req.body.comment;

    Post.findByIdAndUpdate(req.body.postId, { $pull: { comments: { _id: comment._id } } }, { new: true })
        .populate('comments.postedBy', '_id name')
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