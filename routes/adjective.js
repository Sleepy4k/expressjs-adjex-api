const Router = require("express").Router();
const adjectiveController = require("../controllers/adjective");

/* GET adjective listing. */
Router.get("/adjective", adjectiveController.index);

/* GET spesific adjective listing. */
Router.get("/adjective/:letter", adjectiveController.show);

module.exports = Router;