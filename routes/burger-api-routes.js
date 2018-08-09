var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.burgers.findAll({}).then(function (result) {
      res.render("index", { burger: result })
    });
  });

  app.post("/api/burgers", function (req, res) {
    db.burgers.create({
      burger_name: req.body.burger_name
    }).then(function (result) {
      res.render("index", { burger: result })
    });
  });

  app.put("/api/burgers/:id", function (req, res) {
    db.burgers.update({
      devoured: req.body.devoured
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        res.render("index", { burger: result })
      });
  });

};
