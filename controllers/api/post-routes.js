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

router.get('/:id', (req, res) => {
    Post.findOne({
        where: { id: req.params.id },
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

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.body.user_id
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            post_content: req.body.post_content,
            user_id: req.session.user_id
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        }
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            user_id: req.session.user_id,
            id: req.params.id
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

module.exports = router