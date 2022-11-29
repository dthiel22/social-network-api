


const think = [
    {
        thoughtText: 'TEST 1',
    }, {
        thoughtText: 'TEST 2',
    }, {
        thoughtText: 'TEST 3',
    }, {
        thoughtText: 'TEST 4',
    }, {
        thoughtText: 'TEST 5',
    },
]

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];



const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push(getRandomArrItem(think));
    }
    return results;
};


module.exports = { getRandomThought }