//DEPENDENCIES
var connection = require("../config/connection");

// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
  //`selectAll()`
  selectAll: function (tableInput, cd) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  //`insertOne()`
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  //`updateOne()`
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += "SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

//Export ORM object in module.exports for other modules
module.exports = orm;