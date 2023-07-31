const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controller');

userRoutes.get('/', controller.getUsers);

userRoutes.post('/createUser', controller.createUser);

module.exports = userRoutes;
