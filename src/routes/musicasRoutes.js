const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/', controller.getAll);
route.get('/musicas', controller.getAll);
route.get('/musicas/:id', controller.getByID);
route.get('/musicas/:language', controller.getByLanguage);

module.exports = route;