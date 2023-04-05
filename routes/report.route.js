/**
 * Module dependencies.
 */
import { Router } from "express";
import { jwt } from "../middlewares/index.js";
import { index, store } from "../controllers/report.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET quiz listing. */
router.get("/", index);

/* POST quiz listing. */
router.post("/", jwt.verifyToken, store);

export default router;

// Path: routes\quiz.route.js
