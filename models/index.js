const User = require('./User');
const Comment = require('./Comment.js');
const Post = require('./Post.js');

//Associations 

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

module.exports = { User, Comment, Post };
