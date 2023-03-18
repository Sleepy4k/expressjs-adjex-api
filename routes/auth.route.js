/**
 * Module dependencies.
 */
import { Router } from "express";
import { jwt } from "../middlewares/index.js";
import { login, register, logout } from "../controllers/auth.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* POST login listing. */
router.post("/login", login);

/* POST register listing. */
router.post("/register", register);

/* POST logout listing. */
router.post("/logout", jwt.verifyToken, logout);

export default router;

// Path: routes\auth.route.js
