const router = require("express").Router();
const { register } = require("../middleware");
const authController = require("../controllers/auth.controller");

/* POST login listing. */
router.post("/login", authController.login);

/* GET register listing. */
router.post("/register", authController.register);

module.exports = router;
