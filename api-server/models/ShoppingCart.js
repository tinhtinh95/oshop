const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShoppingCart = new Schema({
    product:{
        type: Object
    },
    quantity:{
        type: Number,
        default: 0
    },
    
});

module.exports = mongoose.model('ShoppingCart', ShoppingCart);