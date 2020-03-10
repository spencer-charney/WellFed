const express = require('express');
const router = express.Router();

const User = reuqire('../models/User');

//@route GET /api/users.api/test
//@desc Testing the user Route
//@access Public

router.get('/test', (req,res) => res.json({msg:'Router Works'}));




module.exports = router;