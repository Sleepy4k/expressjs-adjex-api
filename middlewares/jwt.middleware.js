/**
 * Module dependencies.
 */
import jwt from "jsonwebtoken";
import { secret } from "../config/auth.config.js";

/**
 * Verify jwt token for validation.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function verifyToken(req, res, next) {
  const token = req.session.token;

  if (!token) {
    return res.status(403).json({
      status: "error",
      message: "No token provided!",
      data: {},
    });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized!",
        data: {},
      });
    }
    req.userId = decoded.id;
    next();
  });
}

// Path: middlewares\jwt.middleware.js
