const likesController = require('../controllers/likes.js');
const commentsController = require('../controllers/comments.js');
var path = require('path');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
   });

 app.get('/tech-articles', function(req, res) {
   res.render('index');
  });

 app.get('/varia-articles', function(req, res) {
   res.render('varia-articles');
  });

 app.get('/about', function(req, res) {
   res.render('about');
  });

 app.post('/add_like', function(req, res) {
    likesController.create(req, res)
     .then(function(like){
        res.redirect(302, '/');
      }, function(error) {
      });
  });

  app.post('/add_comment', function(req, res) {
     commentsController.create(req, res)
      .then(function(comment){
         res.redirect(302, '/');
       }, function(error) {
       });
   });

}
