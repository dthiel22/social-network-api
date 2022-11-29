const connection = require('../config/connection');

const { User, Thought } = require('../models')
const { getRandomThought } = require('./data');

const userData = [
    {
        username: 'User1',
        email: 'user1@user.com',
    },
    {
        username: 'User2',
        email: 'user2@user.com',
    },
    {
        username: 'User3',
        email: 'user3@user.com',
    },
]

const thoughtData = [
    {
        thoughtText: 'This is my first thought!',
        username: 'User1'
    },
    {
        thoughtText: 'I think therefore I am!',
        username: 'User2'
    },
    {
        thoughtText: 'thinking..........',
        username: 'User3'
    },
]


connection.on('error', (err) => err);


connection.once('open', async () => {
    console.log('connected');

    // Drop existing users
    await User.deleteMany({});

    await Thought.deleteMany({})

    await User.collection.insertMany(userData)

    await Thought.collection.insertMany(thoughtData)

    console.info('Seeding complete! 🌱');
    process.exit(0);
});