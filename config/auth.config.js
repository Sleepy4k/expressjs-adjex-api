import "dotenv/config.js";

export const secret = process.env.JWT_TOKEN_SECRET || "secret";
export const expiresIn = process.env.JWT_TOKEN_EXPIRES_IN || "1d";

// Path: config\auth.config.js
