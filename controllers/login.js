
const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/login', async (req, res) => {
 
    res.render('authForm', { isSignUp: false } );
});

module.exports = router;
