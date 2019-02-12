const express = require('express');

const catRoutes = express.Router();

let Category = require('../models/Category');

catRoutes.route('/').get((req, res) => {
    Category.find((err, categories) => {
        if(err){
            console.log(err);
        }else {
            res.json(categories);
            console.log(res);
        }
    });
});

module.exports = catRoutes;