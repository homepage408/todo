const express = require('express');
const router = express.Router();
const UsersController = require("./../controller/user")


router.route('/signUp').post(UsersController.signUp)


module.exports = { router }