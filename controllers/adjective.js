const db = require("../database/models");
const { adjective } = db;

const url = require('../config/app').url

// GET /quizzes
exports.index = (req, res, next) => {
  var urlString = url + req.originalUrl
  var fixUrl = new URL(urlString)
  var count = fixUrl.searchParams.get('count')
  var filter = fixUrl.searchParams.get('filter')

  adjective
    .findAll({ limit: count || 25, order: 'RAND' })
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

// POST /quizzes/store
exports.store = (req, res, next) => {
  const { question, answer } = req.body;

  quiz
    .create({ question, answer })
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