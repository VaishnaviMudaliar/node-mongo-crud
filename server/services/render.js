exports.homeRoutes = (req, res) => {
  res.render('index');
};

exports.add_user = (req, res) => {
  res.render('_add_user');
};

exports.update_user = (req, res) => {
  res.render('_update_user');
};
