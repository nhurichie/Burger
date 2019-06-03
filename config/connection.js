//DEPENDENCIES
var mysql = require("mysql");

//CONNECTION MYSQL- burgers_db
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySql as ID " + connection.threadId + "\n");
});

//EXPORT -- ORM
module.exports = connection;