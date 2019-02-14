const express = require('express');

const userRouter = express.Router();
const User = require('../models/User');

userRouter.route('/').get((req, res) => {
    User.findOne({email})
})