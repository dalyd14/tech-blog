const router = require('express').Router();
const { Post, User, Comment } = require('../model')

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    Post.findOne( {
        where: {
            id: req.params.id
        },
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
    .then(dbPostData => {
        const post = dbPostData.get({ plain: true })
        console.log({ post })
        res.render('single-post', {
            post,
            session: req.session
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

module.exports = router