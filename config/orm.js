//DEPENDENCIES
var connection = require("../config/connection");

//HELPER FUNCTIONS -- MYSQL 
function printQMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?")
  }
  return arr.toString();
}

//OBJECT ARRAY --> SQL SYNTAX
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// METHODS -- MYSQL to CONTROLLERS
var orm = {
  //`selectAll()`
  selectAll: function (tableInput, cd) {
    var queryDBString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryDBString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  //`insertOne()`
  insertOne: function (table, cols, vals, cb) {
    var queryDBString = "INSERT INTO " + table;

    queryDBString += " (";
    queryDBString += cols.toString();
    queryDBString += ") ";
    queryDBString += "VALUES (";
    queryDBString += printQuestionMarks(vals.length);
    queryDBString += ") ";

    console.log(queryDBString);

    connection.query(queryDBString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  //`updateOne()`
  updateOne: function (table, objColVals, condition, cb) {
    var queryDBString = "UPDATE " + table;

    queryDBString += "SET ";
    queryDBString += objToSql(objColVals);
    queryDBString += " WHERE ";
    queryDBString += condition;

    console.log(queryDBString);
    connection.query(queryDBString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};
//Export ORM object in module.exports for other modules
module.exports = orm;