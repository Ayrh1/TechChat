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
