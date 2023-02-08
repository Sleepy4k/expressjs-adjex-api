const router = require("express").Router();
const adjectiveController = require("../controllers/adjective.controller");

/* GET adjective listing. */
router.get("/", adjectiveController.index);

/* GET spesific adjective listing. */
router.get("/:letter", adjectiveController.show);

module.exports = router;
