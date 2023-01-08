var express = require("express");
var router = express.Router();

var config = require("../config/app");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: config.name });
});

module.exports = router;
