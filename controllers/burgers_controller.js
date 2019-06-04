//DEPENDENCIES
var express = require("express");
var router = express.Router();

//IMPORT MODEL to USE DATABASE FUNCTIONS
var burger = require("../models/burger");

// Create the `router` for the app, and export the `router` at the end of your file.

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbarsOject = {
      burgers: data
    };
    console.log(hbarsOject);
    res.render("index", hbarsOject);
  });
});

router.post("api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

//EXPORT ROUTES FOR SERVER.JS
module.exports = router;