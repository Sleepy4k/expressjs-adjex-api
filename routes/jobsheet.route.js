/**
 * Module dependencies.
 */
import { Router } from "express";
import { jwt } from "../middlewares/index.js";
import { one, many } from "../controllers/jobsheet.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* Post one listing. */
router.post("/one", jwt.verifyToken, one);

/* POST many listing. */
router.post("/many", jwt.verifyToken, many);

export default router;

// Path: routes\jobsheet.route.js
