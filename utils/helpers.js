const moment = require('moment');


const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

const formatDate = (datetime) => {
  return moment(datetime).format('YYYY-MM-DD HH:mm:ss');
};


module.exports = {withAuth, formatDate};
