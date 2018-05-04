const likesController = require('../controllers/likes.js');
var path = require('path');

function renderResponse(req, res, message) {
  likesController.list(req, res)
   .then(function(listings){
      res.render('index', { x: listings, message: message });
    });
}

module.exports = function(app) {

  app.get('/event-listener', function(req, res) {
    res.render('event-listener');
  })
  app.get('/promise-object', function(req, res) {
    res.render('promise-object');
  })
  app.get('/api-async', function(req, res) {
    res.render('api-async');
  })
  app.get('/api-use', function(req, res) {
    res.render('api-use');
  })

  app.get('/', function(req, res) {
    console.log("im hihii")
    res.render('index');
     // renderResponse(req, res, "");
   });

   app.post('/add_like', function(req, res) {
     console.log("im here")
      likesController.create(req, res)
       .then(function(like){ // redirect when success, flash needed.
          res.redirect(302, '/');
        }, function(error) { // render with error on failure
          renderResponse(req, res, "Error!");
        });
    });

}
