const Router = require("express").Router();
const name = require("../config/app").name;

/* GET home page. */
Router.get("/", function (req, res, next) {
  res.render("index", { title: name });
});

/* RESOURCE quiz. */
Router.use("/api/quiz", require("./quiz"));

/* RESOURCE jobsheet. */
Router.use("/api/jobsheet", require("./jobsheet"));

module.exports = Router;