/**
 * Module dependencies.
 */
const jwt = require("./jwt.middleware");
const register = require("./register.middleware");

module.exports = {
  jwt,
  register,
};
