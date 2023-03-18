/**
 * Module dependencies.
 */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import models from "../models/index.js";
import config from "../config/auth.config.js";

/**
 * Handle user for login.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function login(req, res, next) {
  const { username, password } = req.body;

  if (!req.body.username || !req.body.password) {
    return res.status(422).json({
      status: "error",
      message: "Username and password are required",
      data: {},
    });
  }

  try {
    await models.user
      .findOne({
        where: { userName: username },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      })
      .then((user) => {
        if (!user) {
          res.status(200).json({
            status: "success",
            message: "Login failed",
            data: user || {},
          });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
          return res.status(401).send({
            status: "error",
            message: "Invalid Password!",
            data: {},
          });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });

        req.session.token = token;

        res.status(200).json({
          status: "success",
          message: "Login successful",
          data: user || {},
          token: token,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
}

/**
 * Handle user for register.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function register(req, res, next) {
  const { firstname, lastname, username, password } = req.body;

  if (!firstname || !lastname || !username || !password) {
    return res.status(422).json({
      status: "error",
      message: "Firstname, lastname, username and password are required",
      data: {},
    });
  }

  try {
    await models.user
      .findOne({
        where: {
          userName: username,
        },
      })
      .then((user) => {
        if (user) {
          res.status(200).json({
            status: "success",
            message: "User already exist",
            data: {},
          });
          return;
        } else {
          models.user
            .create({
              firstName: firstname,
              lastName: lastname,
              userName: username,
              password: bcrypt.hashSync(password, 10),
            })
            .then((user) => {
              res.status(200).json({
                status: "success",
                message: "Register successful",
                data: user || {},
              });
            })
            .catch((error) => {
              res.status(500).json({
                status: "error",
                message: "Internal server error",
                data: error.message || {},
              });
            });
        }
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
}

/**
 * Handle user for logout.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function logout(req, res, next) {
  try {
    req.session = null;

    res.status(200).json({
      status: "success",
      message: "Logout successful",
      data: {},
      session: req.session,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
}

// Path: controllers\auth.controller.js
