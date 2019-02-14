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

productRoutes.route('/checkExist/:title').get((req, res) => {
    // console.log('ddd');
    const title = req.params.title;
    Product.findOne({title}).then(product => {
        if(product) {
            res.json(product);
        }else {
            res.status(404).send();
        }
    })
});

module.exports = productRoutes;