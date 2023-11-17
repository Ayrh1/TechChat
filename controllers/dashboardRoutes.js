const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/dashboard',  async (req, res) => {
  
    res.render('dashboard');
  });

module.exports = router;