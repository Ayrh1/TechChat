// handlebars-helpers.js
const moment = require('moment');

const formatDate = (datetime) => {
  return moment(datetime).format('YYYY-MM-DD HH:mm:ss');
};

module.exports = {
  formatDate
};
