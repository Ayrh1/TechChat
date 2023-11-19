const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashboardRoutes');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');
const postFormRoutes = require('./postForm');


router.use('/', homeRoutes);
router.use('/', dashRoutes);
router.use('/', loginRoutes);
router.use('/', signupRoutes);
router.use('/', postFormRoutes);
router.use('/api', apiRoutes);

module.exports = router;
