const Router = require("express").Router();
const JobsheetController = require("../controllers/jobsheet");

/* Post one listing. */
Router.post("/one", JobsheetController.one);

/* POST many listing. */
Router.post("/many", JobsheetController.many);

module.exports = Router;