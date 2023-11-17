
const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/signup', async (req, res) => {
  res.render('authForm', { isSignUp: true });
});

module.exports = router;

