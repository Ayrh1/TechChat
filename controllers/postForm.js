const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/newPost', withAuth, async (req, res) => {
    try {
  
      res.render('postForm', { isPost: true }); // Pass relevant data to the template
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred while loading the page." });
    }
  });

  
  module.exports = router;
