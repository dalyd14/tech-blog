const router = require('express').Router();
const { User } = require('../../model')
const withAuth = require('../../utils/auth')

// GET ALL
router.get('/', (req, res) => {
    User.findAll( {
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        console.log("i got to here!")
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true
            
            res.json({user: dbUserData, message: 'You are now logged in.'})
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({ message: 'No user found with this username.'})
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password)
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password.'})
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true

            res.json({user: dbUserData, message: 'You are now logged in.'})
        })
    })
})

router.post('/logout', withAuth, (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(400).end()
    }
})

router.put('/:id', withAuth, (req, res) => {
    User.update(
        {
            username: req.body.username,
            password: req.body.password
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
})

router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

module.exports = router