/**
 * Module dependencies.
 */
const models = require("../models");
const url = require("../config/app.config").url;

/**
 * Display a listing of the resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.index = async (req, res, next) => {
  var urlString = url + req.originalUrl;
  var fixUrl = new URL(urlString);
  var count = fixUrl.searchParams.get("count");

  await models.adjective
    .findAll({ limit: count || 25 })
    .then((adjectives) => {
      res.status(202).json({
        status: "success",
        message: "Adjectives fetched successfully",
        data: adjectives || {},
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
 * Display a specified resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.show = async (req, res, next) => {
  var letter = req.params.letter;

  await models.adjective
    .findAll({ where: { letter: letter } })
    .then((adjective) => {
      res.status(206).json({
        status: "success",
        message: "Adjectives fetched successfully",
        data: adjective || {},
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
