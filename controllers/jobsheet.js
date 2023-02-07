const db = require("../database/models");
const { quiz } = db;

// POST /jobsheets/one
exports.one = (req, res, next) => {
  const { quizId, answer } = req.body;

  quiz
    .findOne({ where: { id: quizId } })
    .then((quiz) => {
      if (quiz.answer === answer) {
        res.status(200).json({
          status: "success",
          message: "Answer is correct",
          data: quiz || {},
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Answer is incorrect",
          data: quiz || {},
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        data: error || {},
      });
    });
};

// POST /jobsheets/many
exports.many = (req, res, next) => {
  const { quizId, answer } = req.body;

  try {
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < quizId.length; i++) {
      quiz
        .findOne({
          limit: 1,
          where: { id: quizId[i] },
          order: [["id", "DESC"]],
        })
        .then((quiz) => {
          if (quiz.answer === answer[i]) {
            correct++;
          } else {
            incorrect++;
          }
        })
        .catch((error) => {
          res.status(500).json({
            status: "error",
            message: "Internal server error",
            data: error || {},
          });
        });
    }

    res.status(200).json({
      status: "success",
      message: "Answer is correct",
      data: { correct, incorrect },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error || {},
    });
  }
};