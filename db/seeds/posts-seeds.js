const Post = require('../../model/Post');

const postData = [
    {
        title: "post1",
        post_content: "post 1 content",
        user_id: 1
    },
    {
        title: "post2",
        post_content: "post 2 content",
        user_id: 1
    },
    {
        title: "post3",
        post_content: "post 3 content",
        user_id: 1
    },
    {
        title: "post4",
        post_content: "post 4 content",
        user_id: 2
    },
    {
        title: "post5",
        post_content: "post 5 content",
        user_id: 3
    },
    {
        title: "post6",
        post_content: "post 6 content",
        user_id: 3
    },
    {
        title: "post7",
        post_content: "post 7 content",
        user_id: 3
    },
    {
        title: "post8",
        post_content: "post 8 content",
        user_id: 5
    },
    {
        title: "post9",
        post_content: "post 9 content",
        user_id: 5
    },
    {
        title: "post10",
        post_content: "post 10 content",
        user_id: 6
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;