//This line imports the Sequelize library into your Node.js application
const Sequelize = require('sequelize');
/*
This line imports the dotenv library and immediately calls its config method. 
dotenv is a module that loads environment variables from a .env file into process.env, 
making them available throughout your application. 
*/
require('dotenv').config();
/*
declare a variable sequelize. This variable will be used to hold the Sequelize instance 
that connects to your database.
*/
let sequelize;

// * (see note..)
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {  // ** (see note..)
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;


/*  
        * (see note..)
This if statement checks if process.env.JAWSDB_URL exists. process.env is an object 
representing the state of the system environment (including environment variables) 
when the process was started. If JAWSDB_URL is present, it indicates that the 
application should connect to a JAWSDB MySQL database (commonly used in production 
environments like Heroku). The new Sequelize(process.env.JAWSDB_URL) creates a new 
Sequelize instance using the database URL from JAWSDB_URL.
*/
/* 
        ** (see note..)
n this else block, a new Sequelize instance is created for a local database. 
It uses process.env.DB_NAME, process.env.DB_USER, and process.env.DB_PASSWORD for the 
database name, user, and password, respectively. 
The options object { host: 'localhost', dialect: 'mysql', port: 3306 } specifies that 
Sequelize should connect to a MySQL database running on localhost (your machine) on port 3
306 (the default MySQL port).
*/