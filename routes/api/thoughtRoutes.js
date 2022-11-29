const router = require('express').Router();
const { Thought, User } = require('../../models');

router.get('/', (req, res) => {
    Thought.find()
        .then(thoughts => res.json(thoughts))
        .catch(err => {
            res.json(err)
            console.log(err)
        })
})


router.get('/:thoughtId', (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
})

router.post('/', (req, res) => {
    console.log(req.body);
    Thought.create(req.body)
        .then(thought => {
            // User.findOne({ _id: req.body.userId })
            User.findByIdAndUpdate(req.body.userId,
                {
                    $addToSet: { thoughts: thought._id }
                },
                { new: true })
                .then((user) =>
                    !user
                        ? res.status(404).json({ message: 'No user with that ID, but thought was created' })
                        : res.json(thought)

                )
                .catch((err) => res.status(500).json(err));
        })
})

router.put('/:thoughtId', (req, res) => {
    Thought.findByIdAndUpdate(req.params.thoughtId, {
        thoughtText: req.body.thoughtText
    }, { new: true })
        .then(thought => !thought
            ? res.status(404).json({ message: 'No thought with that ID, but thought was created' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
})

router.delete('/:thoughtId', (req, res) => {
    Thought.findByIdAndDelete(req.params.thoughtId)
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json({ message: 'thought removed' })
        )
        .catch((err) => res.status(500).json(err));
})

module.exports = router;