//DEPENDENCIES
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 3000;

// STATIC CONTENT -- PUBLIC DIRECTORY
app.use(express.static("public"));

// JSON -- PARSE REQUEST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//ROUTES
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//LISTENER -- LOG --SERVER-SIDE
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});