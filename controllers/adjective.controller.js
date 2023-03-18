/**
 * Module dependencies.
 */
import models from "../models/index.js";
import { url } from "../config/app.config.js";

/**
 * Display a listing of the resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function index(req, res, next) {
  const urlString = url + req.originalUrl;
  const fixUrl = new URL(urlString);
  const count = fixUrl.searchParams.get("count") || 25;

  await models.adjective
    .findAll({ offset: 0, limit: Number(count) })
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
}

/**
 * Display a specified resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function show(req, res, next) {
  const letter = req.params.letter;

  await models.adjective
    .findOne({ where: { name: letter } })
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
}

// Path: controllers\adjective.controller.js
