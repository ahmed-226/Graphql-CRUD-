const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['in progress', 'complete', 'not started'],
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    }
});

module.exports = mongoose.model('Project', ProjectSchema);