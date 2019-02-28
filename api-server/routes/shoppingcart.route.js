const express = require('express');
const _ = require('lodash');

const ShoppingCart = require('../models/ShoppingCart');
const shoppingRoutes = express.Router();
const { ObjectID } = require('mongodb');

shoppingRoutes.route('/').get((req, res) => {
    ShoppingCart.find((err, products) => {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    })
});
shoppingRoutes.route('/add').post((req, res) => {
    const product = req.body;
    ShoppingCart.findOne({ product }).then(result => {
        if (result) {
            ShoppingCart.findOneAndUpdate({
                product: result.product
            }, {
                    $set: {
                        quantity: result.quantity + 1
                    }
                }, {
                    new: true
                }, (err, doc) => {
                    if (err) {
                        res.status(404).send('Cannot add more', err);
                    }
                    res.status(200).json({ cart: `Product ${doc.product.title} is added to cart succesfully` });
                })
        } else {
            const quantity = 1;
            let cart = new ShoppingCart({ product, quantity });
            cart.save()
                .then(doc => {
                    res.status(200).json({ cart: `Product ${doc.product.title} is added to cart succesfully` });
                })
                .catch(err => {
                    res.status(400).send('Unable to add a new product to the cart');
                })
        }
    })


});

// productRoutes.route('/delete/:id').delete((req,res) => {
//     let id = req.params.id;
//     if (!ObjectID.isValid(id)) {
//         return res.status(404).send('ID is invalid');
//     }
//     Product.findOneAndDelete({_id: id})
//         .then(product => {
//             if(product){
//                 res.status(200).json({result: `Product ${product.title} is deleted succesfully`});
//             }else {
//                 res.status(404).send('Cannot found product');
//             }
//         })
//         .catch(err => {
//             res.status(400).send('Cannot delete ', err);
//         })
// });

// productRoutes.route('/get/:id').get((req, res) => {
//     const id = req.params.id;
//     if(!ObjectID.isValid(id)) {
//         return res.status(404).send('ID is invalid');
//     }
//     Product.findOne({_id: id}).then(product => {
//         if(product) {
//             res.json(product);
//         }else {
//             res.status(200).send();
//         }
//     }).catch(err => {
//         res.status(400).send('Cannot get product ', err);
//     })
// });

// productRoutes.route('/edit/:id').post((req, res) => {
//     let id = req.params.id;
//     // var body = _.pick(req.body, ['title','price', 'category','imageUrl']); // k co phia sau thi k update
//     let product = req.body; // khi new thi tao ra id moi nen k the update
//     Product.findOneAndUpdate({_id: id}, {$set:product}, {new: true}, (err, doc) => {
//         if (err) {
//             res.status(404).send('Cannot update this product ', err);
//         }
//         res.status(200).json({product: `Product ${product.title} is updated succesfully`});
//     })
// });

module.exports = shoppingRoutes;