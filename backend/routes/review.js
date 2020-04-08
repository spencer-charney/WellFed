const express = require('express');
const {
	getReviews, 
	createReview, 
	reviewsByUser, 
	reviewById,
	isPoster,
	deleteReview,
	comment,
	uncomment
} = require('../controllers/review');
const {requireSignin} = require('../controllers/auth');
const {userById} = require('../controllers/user');

const router = express.Router();


router.put("/review/comment", requireSignin, comment);
router.put("/review/uncomment", requireSignin, uncomment);



router.get('/reviews', getReviews);
//TODO: ADD BACK IN THE REQUIRE SIGN IN HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.post('/post/new/:userId', createReview);
router.get('/reviews/by/:userId', requireSignin, reviewsByUser);
router.delete('/review/:postId', requireSignin, isPoster, deleteReview);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);

router.param("reviewId", reviewById);

module.exports = router;
