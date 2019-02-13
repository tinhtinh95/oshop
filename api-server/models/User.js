const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    email: {
        type: String
    },
    isAdmin: {
        type: Boolean
    },
    name: {
        type: String
    },
    
});

module.exports = mongoose.model('User', User);