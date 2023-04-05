/**
 * Module dependencies.
 */
import { Router } from "express";

/*
 * Import routes.
 */
import auth from "./auth.route.js";
import quiz from "./quiz.route.js";
import report from "./report.route.js";
import jobsheet from "./jobsheet.route.js";
import adjective from "./adjective.route.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    status: "success",
    message: "Welcome to the API",
  });
});

/* RESOURCE quiz. */
router.use("/api/auth", auth);

/* RESOURCE quiz. */
router.use("/api/quiz", quiz);

/* RESOURCE jobsheet. */
router.use("/api/jobsheet", jobsheet);

/* RESOURCE adjective. */
router.use("/api/adjective", adjective);

/* RESOURCE report. */
router.use("/api/report", report);

export default router;

// Path: routes\index.js
