const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    imageUrl: {
        type: String
    },
    price: {
        type: Number
    }
    
});

module.exports = mongoose.model('Product', Product);