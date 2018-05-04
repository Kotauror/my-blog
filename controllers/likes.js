const Like = require('../models').Like;

module.exports = {
  create(req, res) {
    return Listing
      .create({
        art_id: req.body['art_id']
      })
  },

  // list(req, res) {
  //   return Listing
  //     .all()
  // },
};
