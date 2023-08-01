const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controller');

/* Obtener todos los usuarios */
userRoutes.get('/', controller.getUsers);

/* Crear un usuario */
userRoutes.post('/createUser', controller.createUser);


module.exports = userRoutes;
