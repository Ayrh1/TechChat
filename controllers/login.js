
const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/login', (req, res) => {
    res.render('authForm', { actionRoute: '/api/users/login', isSignUp: false });
});

module.exports = router;
