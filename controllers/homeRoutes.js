const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ['text', 'createdAt', 'user_id'],
          include: [{
            model: User, // A User model
            attributes: ['name'] // or whatever attributes you need
          }]
        },
        {
          model: User, // Including the user for the post
          attributes: ['name']
        }
      ],
    });

    const posts = dbPostData.map((post) =>
    post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;


/*

const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/helpers.js');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
*/