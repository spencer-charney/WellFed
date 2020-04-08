const Review = require('../models/review');

exports.reviewById = (req, res, next, id) => {
	Review.findById(id)
	.populate("postedBy", "_id name")
	.exec((err, review) => {
		if (err || !review) {
			return res.status(400).json({
				error: err
			});
		}

		req.review = review;
		next();
	});
}

exports.getReviews = (req, res) => {
	const reviews = Review.find()
	.populate("postedBy", "_id name")
	.populate('comments', 'text created')
	.populate('comments.postedBy', '_id name')
	.select('_id type restaurant dish rate tags review created')
	.then((reviews) => {
		res.status(200).json({review: reviews});
	})
	.catch(err => console.log(err));
}

exports.createReview = (req, res, next) => {
	const review = new Review(req.body);
	review.postedBy = req.profile;
    review.save((err,result) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
        res.json({
            review: result
        });
    });
}

exports.reviewsByUser = (req, res) => {
	Review.find({postedBy: req.profile._id})
		.populate("postedBy", "_id name")
		.sort("_created")
		.exec((err, reviews) => {
			if (err) {
				return res.status(400).json({
					error: err
				});
			}
			res.json(reviews);
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

exports.deleteReview = (req, res) => {
	let review = req.review;
	review.remove((err, post) => {
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

    Review.findByIdAndUpdate(req.body.reviewId, { $push: { comments: comment } }, { new: true })
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

    Review.findByIdAndUpdate(req.body.reviewId, { $pull: { comments: { _id: comment._id } } }, { new: true })
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