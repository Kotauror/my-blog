'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comm = sequelize.define('Comment', {
    art_id: DataTypes.INTEGER,
    author: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Comm.associate = function(models) {
    // associations can be defined here
  };
  return Comm;
};
