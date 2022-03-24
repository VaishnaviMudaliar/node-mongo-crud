const express = require('express');
const route = express.Router();
const services = require('../services/render');

/*
  @description Root Router
  @method GET/
*/

route.get('/', services.homeRoutes);

route.get('/add-user', (req, res) => {
  res.render('_add_user');
});

route.get('/update-user', (req, res) => {
  res.render('_update_user');
});

module.exports = route;
