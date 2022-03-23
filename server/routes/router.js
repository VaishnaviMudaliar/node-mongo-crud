const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.render('index');
});

route.get('/add-user', (req, res) => {
  res.render('_add_user');
});

route.get('/update-user', (req, res) => {
  res.render('_update_user');
});

module.exports = route;
