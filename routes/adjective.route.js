/**
 * Module dependencies.
 */
import { Router } from "express";
import { index, show } from "../controllers/adjective.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET adjective listing. */
router.get("/", index);

/* GET spesific adjective listing. */
router.get("/:letter", show);

export default router;

// Path: routes\adjective.route.js
