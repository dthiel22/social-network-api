const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: Date,
    username: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        }
    ],
}, {
    toJSON: {
        getters: true,
    },
    id: false
})
const Thought = model('thought', thoughtSchema)

module.exports = Thought;