//This line imports the Sequelize instance configured for your application. 
const sequelize = require('../config/connection');
//importing the models (User, Post, Comment)
const { User, Post, Comment } = require('../models');

/*
import the data from JSON files that you will use for seeding. 
userData, postData, and commentData are arrays of objects
*/
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json'); // Assuming it's a JSON file

/*
line defines an [asynchronous] function seedDatabase. Asynchronous functions allow to use [await] 
to pause the function execution until a promise is resolved, 
which is essential for database operations that are inherently asynchronous.
*/
const seedDatabase = async () => {
  //[try] block starts here. It allows to execute code and catch any errors that might occur. 
  try { 
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true // very important, if using a beforeCreate Hook
    });

    await Post.bulkCreate(postData);

    await Comment.bulkCreate(commentData);

    console.log('Database seeded!');
  } catch (error) {
    console.error('Failed to seed database:', error);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
