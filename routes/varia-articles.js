const likesController = require('../controllers/likes.js');
const commentsController = require('../controllers/comments.js');

var path = require('path');

module.exports = function(app) {

 app.get('/varia-articles/oceanic', function(req, res) {
  likesController.count(8).then(function(likesCount) {
    commentsController.list(8).then(function(comments) {
    res.render('varia-articles/oceanic', {likesCount: likesCount, comments: comments});
    })
  });
 })

}
