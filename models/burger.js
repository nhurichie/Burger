//DEPENDENCIES
var orm = require("../config/orm.js");

//ORM FUNCTIONS TO CALL - BURGER INPUTS
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      return cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      return cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      return cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      return cb(res);
    });
  }
};

//Export burger.js for other module use
module.exports = burger;