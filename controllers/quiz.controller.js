const db = require("../models");
const { quiz } = db;

/**
 * Display a listing of the resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.index = (req, res, next) => {
  quiz
    .findAll()
    .then((quizzes) => {
      res.status(202).json({
        status: "success",
        message: "Quizzes fetched successfully",
        data: quizzes || {},
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};

/**
 * Store a newly created resource in storage.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.store = (req, res, next) => {
  const { question, a, b, c, d, answer, categoryId, levelId } = req.body;

  quiz
    .create({ question, a, b, c, d, answer, categoryId, levelId })
    .then((quiz) => {
      res.status(201).json({
        status: "success",
        message: "Quiz created successfully",
        data: quiz || {},
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};

// GET /quizzes/:id
exports.show = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findByPk(id, { rejectOnEmpty: true })
    .then((quiz) => {
      res.status(206).json({
        status: "success",
        message: "Quiz fetched successfully",
        data: quiz || {},
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};

// PUT /quizzes/:id
exports.update = (req, res, next) => {
  const id = req.params.id;
  const { question, answer } = req.body;

  quiz
    .findByPk(id, { rejectOnEmpty: true })
    .then((quiz) => {
      quiz.question = question;
      quiz.answer = answer;
      return quiz.save();
    })
    .then((quiz) => {
      res.status(202).json({
        status: "success",
        message: "Quiz updated successfully",
        data: quiz || {},
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};

// DELETE /quizzes/:id
exports.destroy = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findByPk(id, { rejectOnEmpty: true })
    .then((quiz) => {
      return quiz.destroy();
    })
    .then(() => {
      res.status(202).json({
        status: "success",
        message: "Quiz deleted successfully",
        data: null,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};

// GET /quizzes/category/:id
exports.categoryId = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findAll({ where: { categoryId: id } })
    .then((quizzes) => {
      res.status(202).json({
        status: "success",
        message: "Quizzes fetched successfully",
        data: quizzes || {},
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};

// GET /quizzes/level/:id
exports.levelId = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findAll({ where: { levelId: id } })
    .then((quizzes) => {
      res.status(202).json({
        status: "success",
        message: "Quizzes fetched successfully",
        data: quizzes || {},
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};
