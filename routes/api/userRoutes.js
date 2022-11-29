const router = require('express').Router();
const { User } = require('../../models');


router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => {
            res.json(err)
            console.log(err)
        })
})

router.get('/:userId', (req, res) => {
    User.findOne({ _id: req.params.userId })
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
})

router.post('/', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => {
            res.json(err)
            console.log(err)
        })
})

router.put('/:userId', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        username: req.body.username
    }, { new: true })
        .then(username => !username
            ? res.status(404).json({ message: 'No username with that ID, but username was created' })
            : res.json(username)
        )
        .catch((err) => res.status(500).json(err));
})

router.delete('/:userId', (req, res) => {
    User.findByIdAndDelete(req.params.userId)
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json({ message: 'user removed' })
        )
        .catch((err) => res.status(500).json(err));
})

module.exports = router;
