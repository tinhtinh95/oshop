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
            res.status(200).send();
        }
    })
});

productRoutes.route('/add').post((req, res) => {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({product: `Product ${product.title} is added succesfully`});
        })
        .catch(err => {
            res.status(400).send('Unable to save the new product to the database');
        })
});

productRoutes.route('/delete/:id').get((req,res) => {
    let id = req.params.id;
    console.log(id);
    Product.findOneAndDelete({_id: id})
        .then(product => {
            console.log(product);
            res.status(200).json({rs: 'Delete success'});
        })
});

module.exports = productRoutes;