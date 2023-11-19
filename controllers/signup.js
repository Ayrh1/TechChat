
const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/signup', (req, res) => {
  res.render('authForm', { actionRoute: '/api/users/signup', isSignUp: true });
});

module.exports = router;

