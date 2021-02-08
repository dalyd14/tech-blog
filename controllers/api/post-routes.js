const router = require('express').Router();
const { User, Post, Comment } = require('../../model');
// const withAuth = require('../../utils/auth')

// GET ALL
router.get('/', (req, res) => {
    Post.findAll( {
        attributes: ['id', 'title', 'post_content', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: User,
                    attributes: ['id', 'username']
                }
            }
        ]

    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

module.exports = router