const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth,  async (req, res) => {
    // inside of this route (we should have a valid user)
    // since we have the USER ID in the incoming REQUEST SESSION object
    let user_id = req.session.user_id
    // Query the database for the current user (by ID) 
    let userData = await User.findOne({ where: { id: user_id }});
    // --> we pull out the USERS COMMENTS/POSTS : Then we can send that DATA to the VIEW
    console.log("Data: ", userData);

    res.render('dashboard', { isLogin: true, posts: userData.posts });
  });

module.exports = router;