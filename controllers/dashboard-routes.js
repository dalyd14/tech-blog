const router = require('express').Router();
const { Post } = require('../model');
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'created_at']
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }))
        console.log(posts)
        res.render('dashboard', {
            posts,
            session: req.session
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'post_content', 'user_id']
    })
    .then(dbPostData => {
        if(req.session.user_id === dbPostData.user_id) {
            const post = dbPostData.get({ plain: true })
            console.log(post)
            res.render('edit-post', {
                post,
                session: req.session
            })            
        } else {
            // res.status(400).json({message: 'This is not your post to edit'})
            res.redirect('/dashboard')
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

module.exports = router