const likesController = require('../controllers/likes.js');
const commentsController = require('../controllers/comments.js');

var path = require('path');

module.exports = function(app) {

  app.get('/tech-articles/promise-object', function(req, res) {
    likesController.count(1).then(function(likesCount) {
      commentsController.list(1).then(function(comments) {
      res.render('tech-articles/promise-object', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/event-listener', function(req, res) {
    likesController.count(2).then(function(likesCount) {
      commentsController.list(2).then(function(comments) {
      res.render('tech-articles/event-listener', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/api-use', function(req, res) {
    likesController.count(3).then(function(likesCount) {
      commentsController.list(3).then(function(comments) {
      res.render('tech-articles/api-use', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/api-async', function(req, res) {
    likesController.count(4).then(function(likesCount) {
      commentsController.list(4).then(function(comments) {
        res.render('tech-articles/api-async', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/sort_by', function(req, res) {
    likesController.count(5).then(function(likesCount) {
      commentsController.list(5).then(function(comments) {
      res.render('tech-articles/sort_by', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/recursion', function(req, res) {
    likesController.count(6).then(function(likesCount) {
      commentsController.list(6).then(function(comments) {
      res.render('tech-articles/recursion', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/node-server-test', function(req, res) {
    likesController.count(7).then(function(likesCount) {
      commentsController.list(7).then(function(comments) {
      res.render('tech-articles/node-server-test', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/run-java', function(req, res) {
    likesController.count(9).then(function(likesCount) {
      commentsController.list(9).then(function(comments) {
      res.render('tech-articles/run-java', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/java-access-modifiers', function(req, res) {
    likesController.count(10).then(function(likesCount) {
      commentsController.list(10).then(function(comments) {
      res.render('tech-articles/java-access-modifiers', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/printstream', function(req, res) {
    likesController.count(11).then(function(likesCount) {
      commentsController.list(11).then(function(comments) {
      res.render('tech-articles/printstream', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/inputstream', function(req, res) {
    likesController.count(12).then(function(likesCount) {
      commentsController.list(12).then(function(comments) {
      res.render('tech-articles/inputstream', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/happiness', function(req, res) {
    likesController.count(13).then(function(likesCount) {
      commentsController.list(13).then(function(comments) {
      res.render('tech-articles/happiness', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/minimax', function(req, res) {
    likesController.count(14).then(function(likesCount) {
      commentsController.list(14).then(function(comments) {
      res.render('tech-articles/minimax', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/alpha-beta', function(req, res) {
    likesController.count(15).then(function(likesCount) {
      commentsController.list(15).then(function(comments) {
      res.render('tech-articles/alpha-beta', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/java-to-android', function(req, res) {
    likesController.count(16).then(function(likesCount) {
      commentsController.list(16).then(function(comments) {
      res.render('tech-articles/java-to-android', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/clojurescript-setup', function(req, res) {
    likesController.count(17).then(function(likesCount) {
      commentsController.list(17).then(function(comments) {
      res.render('tech-articles/clojurescript-setup', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/clojurescript-syntax', function(req, res) {
    likesController.count(18).then(function(likesCount) {
      commentsController.list(18).then(function(comments) {
      res.render('tech-articles/clojurescript-syntax', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/echo-server', function(req, res) {
    likesController.count(19).then(function(likesCount) {
      commentsController.list(19).then(function(comments) {
      res.render('tech-articles/echo-server', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/echo-server-io', function(req, res) {
    likesController.count(20).then(function(likesCount) {
      commentsController.list(20).then(function(comments) {
      res.render('tech-articles/echo-server-io', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/pairing-1', function(req, res) {
    likesController.count(21).then(function(likesCount) {
      commentsController.list(21).then(function(comments) {
      res.render('tech-articles/pairing-1', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/python-postgres', function(req, res) {
    likesController.count(22).then(function(likesCount) {
      commentsController.list(22).then(function(comments) {
      res.render('tech-articles/python-postgres', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/add-react-to-python', function(req, res) {
    likesController.count(23).then(function(likesCount) {
      commentsController.list(23).then(function(comments) {
      res.render('tech-articles/add-react-to-python', {likesCount: likesCount, comments: comments});
      })
    })
  })

  app.get('/tech-articles/react-jest-mock', function(req, res) {
    likesController.count(24).then(function(likesCount) {
      commentsController.list(24).then(function(comments) {
      res.render('tech-articles/react-jest-mock', {likesCount: likesCount, comments: comments});
      })
    })
  })
}
