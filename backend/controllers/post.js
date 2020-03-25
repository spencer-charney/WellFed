const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');

exports.postById = (req, res, next, id) => {
	Post.findById(id)
	.populate("author", "_id name")
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
	.populate("author", "_id name")
	.select('_id title body')
	.then((posts) => {
		res.status(200).json({post: posts});
	})
	.catch(err => console.log(err));
}

exports.createPost = (req, res, next) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: "Image could not be uploaded"
			});
		}
		let post = new Post(fields);
		req.profile.hashed_password = undefined;
		req.profile.salt = undefined;

		post.author = req.profile;

		if (files.photo) {
			post.photo.data = fs.readFileSync(files.photo.path);
			post.photo.contentType = files.photo.type;
		}

		post.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: err
				})
			}
			res.json(result);
		});
	});

	const post = new Post(req.body);
	post.save()
	.then(result => {
		res.status(200).json({
			post: result
		})
	})
}

exports.postsByUser = (req, res) => {
	Post.find({author: req.profile._id})
		.populate("author", "_id name")
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
	let isPoster = req.post && req.auth && req.post.author._id == req.auth._id;
	if (!isPoster) {
		return res.status(403).json({
			error: "User is not authorized"
		});
	}

	next();
}

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
}