/**
 * Module dependencies.
 */
import { Router } from "express";
import { jwt } from "../middlewares/index.js";
import authController from "../controllers/auth.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* POST login listing. */
router.post("/login", authController.login);

/* POST register listing. */
router.post("/register", authController.register);

/* POST logout listing. */
router.post("/logout", jwt.verifyToken, authController.logout);

export default router;

// Path: routes\auth.route.js
