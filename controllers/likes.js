const Like = require('../models').Like;

module.exports = {
  create(req, res) {
    return Like
      .create({
        art_id: parseInt(req.body['art_id'])
      })
  },

  count(number) {
    return Like.findAll({
      where: {
        art_id: number,
      },
    }).then(function(rows) {
      return rows.length;
    });
  }

}
