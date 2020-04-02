const express = require('express');
const {
	getPosts, 
	createPost, 
	postsByUser, 
	postById,
	isPoster,
	deletePost,
	updatePost,
	comment,
	uncomment
} = require('../controllers/post');
const {requireSignin} = require('../controllers/auth');
const {userById} = require('../controllers/user');
const {createPostValidator} = require('../validator');

const router = express.Router();


router.put("/post/comment", requireSignin, comment);
router.put("/post/uncomment", requireSignin, uncomment);



router.get('/posts', getPosts);
//TODO: ADD BACK IN THE REQUIRE SIGN IN HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.post(
	'/post/new/:userId', 
	createPost,
	createPostValidator
);
router.get('/posts/by/:userId', requireSignin, postsByUser);
router.put('/post/:postId', requireSignin, isPoster, updatePost);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);

router.param("postId", postById);

module.exports = router;
