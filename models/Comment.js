const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // Primary key as an auto-incrementing integer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Foreign key for the associated post
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post', // name of the Post model
        key: 'id',
      },
    },
    // Foreign key for the associated user
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // name of the User model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true, // Enable automatic timestamps
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;

module.exports = Comment;
