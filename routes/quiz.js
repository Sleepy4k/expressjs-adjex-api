const Router = require("express").Router();
const QuizController = require("../controllers/quiz");

/* GET quiz listing. */
Router.get("/", QuizController.index);

/* POST quiz listing. */
Router.post("/store", QuizController.store);

/* GET spesific quiz listing. */
Router.get("/:id", QuizController.show);

/* PUT spesific quiz listing. */
Router.put("/:id", QuizController.update);

/* DELETE spesific quiz listing. */
Router.delete("/:id", QuizController.destroy);

/* GET quiz by spesific category listing. */
Router.get("/category/:id", QuizController.categoryId);

/* GET quiz by spesific level listing. */
Router.get("/level/:id", QuizController.levelId);

module.exports = Router;