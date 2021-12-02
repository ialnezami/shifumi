// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  // index page
    app.get('/', function(req, res) {
      res.render('index');
    });
    app.get('/games/:id', function(req, res) {
      const id = req.params.id;
      res.render('invited',{id:id});
    });

};
