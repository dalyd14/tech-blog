const router = require('express').Router();
const { Comment } = require('../../model');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

// CREATE Comment
router.post('/', withAuth, (req, res) => {
    console.log('hello from comments')
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.put('/:id', withAuth, (req, res) => {
    Comment.update(
        {
            comment_text: req.body.comment_text,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
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