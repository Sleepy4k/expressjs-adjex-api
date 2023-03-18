/**
 * Module dependencies.
 */
import { Router } from "express";
import adjectiveController from "../controllers/adjective.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET adjective listing. */
router.get("/", adjectiveController.index);

/* GET spesific adjective listing. */
router.get("/:letter", adjectiveController.show);

export default router;

// Path: routes\adjective.route.js
