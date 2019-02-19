const express = require('express');

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
    console.log('ddd');
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
    console.log(id);
    Product.findOneAndDelete({_id: id})
        .then(product => {
            console.log(product);
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

// productRoutes.route('/getInfo/:id').get((req, res) => {
//     console.log('ddd');
//     const id = req.params.id;
//     Product.findOne({_id: id}).then(product => {
//         if(product) {
//             res.json(product);
//         }else {
//             res.status(200).send();
//         }
//     })
// });

module.exports = productRoutes;