//Dependencies
var mysql = require("mysql");

//Connection to MySql - burgers_db
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

//Export connection for orm.js
module.exports = connection;