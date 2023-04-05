/**
 * Module dependencies.
 */
import models from "../models/index.js";

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
  await models.report
    .findAll()
    .then((reports) => {
      res.status(202).json({
        status: "success",
        message: "Reports fetched successfully",
        data: reports || {},
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
 * Store a newly created resource in storage.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function store(req, res, next) {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(422).json({
      status: "error",
      message: "Bad request",
      data: {},
    });
  }

  try {
    await models.report
      .create({
        title,
        description,
      })
      .then((report) => {
        res.status(201).json({
          status: "success",
          message: "Report created successfully",
          data: report || {},
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
}

// Path: controllers\report.controller.js
