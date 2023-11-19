const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
  let user_id = req.session.user_id;
  try {
    let userData = await User.findOne({
      where: { id: user_id },
      include: [{
        model: Post,
        attributes: ['title', 'createdAt']
      }]
    });

    const isLogin = req.session.logged_in;
    if (!userData || !userData.Posts) {
      // Handle the scenario where no posts are found or userData is undefined
      // For example, you might want to render the dashboard with a message
      // indicating that there are no posts.
      return res.render('dashboard', { isLogin, posts: [] });
    }

    // Map over the posts
    const posts = userData.Posts.map((post) => post.get({ plain: true }));
    
    res.render('dashboard', { isLogin, posts });
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard/newPost', withAuth, async (req, res) => {
  try {

    res.render('postForm', { isPost: true }); // Pass relevant data to the template
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while loading the page." });
  }
});

module.exports = router;