
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

Post.belongsTo(User)
User.hasMany(Post)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.hasMany(Comment)
Comment.belongsTo(User)

module.exports = { User, Post, Comment }