const Comment = require('../models').Comment;

module.exports = {
  create(req, res) {
    return Comment
      .create({
        art_id: req.body['art_id'],
        author: req.body['author'],
        content: req.body['content']
      })
  },

  list(number) {
    return Comment.findAll({
      where: {
        art_id: number,
      }
    })
  }

}
