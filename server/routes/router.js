const express = require('express');
const route = express.Router();

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/add-user', (req, res) => {
  res.render('_add_user');
});

app.get('/update-user', (req, res) => {
  res.render('_update_user');
});
