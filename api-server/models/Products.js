const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Products = new Schema({
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
        type: String
    }
    
});

module.exports = mongoose.model('Products', Products);