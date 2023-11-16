//This imports the Node.js path module, which provides utilities for working with file and directory paths.
const path = require('path');
/*Imports the Express framework, a minimal and flexible Node.js web application framework that provides a 
robust set of features to develop web and mobile applications.*/
const express = require('express');
//Imports express-session, a middleware for Express to manage sessions, which is used to persist data across requests from the same user.
const session = require('express-session');
//Imports express-handlebars, a Handlebars view engine for Express which allows you to use Handlebars templates in your Express application.
const exphbs = require('express-handlebars');
//Imports the routing files from the controllers directory of your application.
const routes = require('./controllers');
//Imports utility functions or 'helpers' used in Handlebars templates.
const helpers = require('./utils/helpers');
//Imports the Sequelize connection configured in ./config/connection. This will be used to interact with your database.
const sequelize = require('./config/connection');

// Imports connect-session-sequelize which is a SQL session store using Sequelize. It is used to store Express session data in the database.
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Initializes a new Express application.
const app = express();
//Sets the port for the application to the environment variable PORT, or 3001 if PORT is not set.
const PORT = process.env.PORT || 3001;
//Creates a new instance of the Handlebars view engine, passing in your custom helpers.
const hbs = exphbs.create({ helpers });

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Tells Express to use the express-session middleware with the configuration you've set in sess.
app.use(session(sess));

//Sets Handlebars as the view engine for the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//These lines add middleware to parse incoming JSON and URL-encoded data. This is important for processing POST and PUT requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serves static files (like CSS, JavaScript, and images) located in the public directory.
app.use(express.static(path.join(__dirname, 'public')));

//Integrates the routes defined in your controllers directory into the Express application.
app.use(routes);

//Syncs the Sequelize models with the database (without forcing any schema changes with force: false)
//and starts the Express server on the specified PORT.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
