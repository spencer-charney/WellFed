const express = require('express');
const {
	userById, 
	allUsers, 
	getUser, 
	updateUser, 
	deleteUser,
	addFollowing,
	addFollower,
	removeFollower,
	removeFollowing,
	createBook,
	populateBook,
	searchUsers,
	getUsername
} = require('../controllers/user');
const {requireSignin} = require('../controllers/auth');

const router = express.Router();
router.put('/user/search', requireSignin, searchUsers);

router.put('/user/createBook', requireSignin, createBook);
router.put('/user/populateBook', requireSignin, populateBook);

router.put('/user/follow', requireSignin, addFollowing, addFollower);
router.put('/user/unfollow', requireSignin, removeFollowing, removeFollower);

router.get('/users', allUsers);
router.put('/user/username', requireSignin, getUsername);
router.get('/user/:userId', requireSignin, getUser);
router.put('/user/:userId', requireSignin, updateUser);
router.delete('/user/:userId', requireSignin, deleteUser);


// any route containing :userId, our app will first execute userById()
router.param("userId", userById);

module.exports = router;
