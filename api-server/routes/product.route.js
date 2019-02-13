const express = require('express');

const Product = require('../models/Product');
const productRoutes = express.Router();

productRoutes.route('/').get((req, res) => {
    Product.find((err, products) => {
        if(err){
            console.log(err);
        }else{
            res.json(products);
        }
    })
});

module.exports = productRoutes;