const express = require('express');
const services = require('../services/render');
const route = express.Router();

/*
  @description Root Router
  @method GET/
*/

route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user);

route.get('/update-user', services.update_user);

module.exports = route;
