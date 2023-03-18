/**
 * Module dependencies.
 */
import { Router } from "express";
import { jwt } from "../middlewares/index.js";
import {
  index,
  store,
  show,
  update,
  destroy,
  categoryId,
  levelId,
} from "../controllers/quiz.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET quiz listing. */
router.get("/", index);

/* POST quiz listing. */
router.post("/", jwt.verifyToken, store);

/* GET spesific quiz listing. */
router.get("/:id", show);

/* PUT spesific quiz listing. */
router.put("/:id", jwt.verifyToken, update);

/* DELETE spesific quiz listing. */
router.delete("/:id", jwt.verifyToken, destroy);

/* GET quiz by spesific category listing. */
router.get("/category/:id", categoryId);

/* GET quiz by spesific level listing. */
router.get("/level/:id", levelId);

export default router;

// Path: routes\quiz.route.js
