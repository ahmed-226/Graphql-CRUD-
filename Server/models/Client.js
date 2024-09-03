const mongoose = require('mongoose');

const ClientSchmea = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    }
});

module.exports = mongoose.model('Client', ClientSchmea);