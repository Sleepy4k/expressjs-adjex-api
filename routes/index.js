const router = require("express").Router();
const name = require("../config/app").name;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: name });
});

/* RESOURCE quiz. */
router.use("/api/quiz", require("./quiz"));

/* RESOURCE jobsheet. */
router.use("/api/jobsheet", require("./jobsheet"));

/* RESOURCE adjective. */
router.use("/api/adjective", require("./adjective"));

module.exports = router;
