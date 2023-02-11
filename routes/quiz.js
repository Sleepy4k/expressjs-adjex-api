const { jwt } = require("../middleware");
const router = require("express").Router();
const quizController = require("../controllers/quiz.controller");

/* GET quiz listing. */
router.get("/", quizController.index);

/* POST quiz listing. */
router.post("/", jwt.verifyToken, quizController.store);

/* GET spesific quiz listing. */
router.get("/:id", quizController.show);

/* PUT spesific quiz listing. */
router.put("/:id", jwt.verifyToken, quizController.update);

/* DELETE spesific quiz listing. */
router.delete("/:id", jwt.verifyToken, quizController.destroy);

/* GET quiz by spesific category listing. */
router.get("/category/:id", quizController.categoryId);

/* GET quiz by spesific level listing. */
router.get("/level/:id", quizController.levelId);

module.exports = router;
