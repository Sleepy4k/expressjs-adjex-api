const { jwt } = require("../middleware");
const router = require("express").Router();
const jobsheetController = require("../controllers/jobsheet.controller");

/* Post one listing. */
router.post("/one", jwt.verifyToken, jobsheetController.one);

/* POST many listing. */
router.post("/many", jwt.verifyToken, jobsheetController.many);

module.exports = router;
