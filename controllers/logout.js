const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/logout',  async (req, res) => {
  
    res.render('authForm');
  });

module.exports = router;