const router = require('express').Router();
const { Post, Comment, User } = require('../models');


router.get('/login',  async (req, res) => {
  
    res.render('authForm');
  });

module.exports = router;
