const router = require('express').Router();
const sequelize = require('../config/connection')

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
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }))
        res.render('homepage', {
            posts,
            session: req.session
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
    res.render('homepage', req.session)
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('login')
})
router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('signup')
})


module.exports = router