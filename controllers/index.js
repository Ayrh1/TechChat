const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashboardRoutes');
const loginRoutes = require('./login');
const logoutRoutes = require('./logout');

router.use('/', homeRoutes);
router.use('/', dashRoutes);
router.use('/', loginRoutes);
router.use('/', logoutRoutes);
router.use('/api', apiRoutes);

module.exports = router;
