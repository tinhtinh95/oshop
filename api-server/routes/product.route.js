const express = require('express');
const _ = require('lodash');

const Product = require('../models/Product');
const productRoutes = express.Router();
const { ObjectID } = require('mongodb');

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

productRoutes.route('/delete/:id').delete((req,res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('ID is invalid');
    }
    Product.findOneAndDelete({_id: id})
        .then(product => {
            if(product){
                res.status(200).json({result: `Product ${product.title} is deleted succesfully`});
            }else {
                res.status(404).send('Cannot found product');
            }
        })
        .catch(err => {
            res.status(400).send('Cannot delete ', err);
        })
});

productRoutes.route('/get/:id').get((req, res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send('ID is invalid');
    }
    Product.findOne({_id: id}).then(product => {
        if(product) {
            res.json(product);
        }else {
            res.status(200).send();
        }
    }).catch(err => {
        res.status(400).send('Cannot get product ', err);
    })
});

productRoutes.route('/edit/:id').post((req, res) => {
    let id = req.params.id;
    // var body = _.pick(req.body, ['title','price', 'category','imageUrl']); // k co phia sau thi k update
    let product = req.body; // khi new thi tao ra id moi nen k the update
    Product.findOneAndUpdate({_id: id}, {$set:product}, {new: true}, (err, doc) => {
        if (err) {
            res.status(404).send('Cannot update this product ', err);
        }
        res.status(200).json({product: `Product ${product.title} is updated succesfully`});
    })
});

module.exports = productRoutes;