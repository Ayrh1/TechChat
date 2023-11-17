const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashboardRoutes');
const loginRoutes = require('./login');
//const signupRoutes = require('./signup');

router.use('/', homeRoutes);
router.use('/', dashRoutes);
router.use('/', loginRoutes);
//router.use('/', signupRoutes);
router.use('/api', apiRoutes);

module.exports = router;
