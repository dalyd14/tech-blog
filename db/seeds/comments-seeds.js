const Comment = require('../../model/Comment');

const commentData = [
    {
        comment_text: "comment 1",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "comment 2",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "comment 3",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "comment 4",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "comment 5",
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: "comment 6",
        user_id: 5,
        post_id: 5
    },
    {
        comment_text: "comment 7",
        user_id: 5,
        post_id: 8
    },
    {
        comment_text: "comment 8",
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: "comment 9",
        user_id: 6,
        post_id: 9
    },
    {
        comment_text: "comment 10",
        user_id: 6,
        post_id: 10
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;