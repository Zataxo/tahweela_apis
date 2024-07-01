const models = require("../models");
const validation = require("../helpers/validation");
const jwt = require("jsonwebtoken");
const bcryptJs = require("bcryptjs");
require("dotenv").config();
class UsersController {
  static registration = async (req, res) => {
    if (
      (await validation.checkUserExistence(req.body.username ?? "none")) == null
    ) {
      const vR = validation.validateUser(req.body);
      if (vR == true) {
        bcryptJs.genSalt(10, (err, salt) => {
          bcryptJs.hash(req.body.password, salt, (err, hashedPassword) => {
            const user = {
              username: req.body.username,
              password: hashedPassword,
              type: req.body.type,
            };
            models.Users.create(user)
              .then((user) => {
                res.status(201).json(user);
              })
              .catch((err) => {
                res.status(500).send("Internal Server Error");
              });
          });
        });
      } else {
        res.status(400).json(vR);
      }
    } else {
      res.status(409).send("User already Exists");
    }
  };
  static login = (req, res) => {
    if (!req.body.username || !req.body.password) {
      return res.status(400).send("User Credintials Should not be Empty");
    }
    models.Users.findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (user != null) {
          bcryptJs.compare(req.body.password, user.password, (err, result) => {
            if (result == true) {
              jwt.sign(
                {
                  username: user.username,
                  password: user.password,
                },
                process.env.JWT_KEY,
                (err, tooken) => {
                  res.status(200).json({
                    token: tooken,
                    user: user,
                  });
                }
              );
            } else {
              res.status(400).send("Invalid Password");
            }
          });
        } else {
          res.status(400).send("Invalid Username");
        }
      })
      .catch((err) => {
        res.status(500).send("Internal Server Error");
      });
  };
  static updateUser = (req, res) => {
    if (!req.body.userId) {
      return res.status(400).send("User ID can not be Empty");
    }
    models.Users.update(req.body, { where: { id: req.body.userId } })
      .then((flag) => {
        if (flag == 1) {
          res.status(200).send("Data Updated Sucessfully");
        } else {
          res.status(400).send("Invalid Data");
        }
      })
      .catch((err) => {
        res.status(500).send("Internal Server Error");
      });
  };
  static resetPassword = (req, res) => {
    if (!req.body.userId) {
      return res.stauts(400).send("User ID can not be Empty");
    }
    bcryptJs.genSalt(10, (err, salt) => {
      bcryptJs.hash(req.body.password, salt, (err, hash) => {
        models.Users.update(
          { password: hash },
          { where: { id: req.body.userId } }
        )
          .then((flag) => {
            if (flag == 1) {
              res.status(200).send("Data Updated Sucessfully");
            } else {
              res.status(400).send("Invalid Data");
            }
          })
          .catch((err) => {
            res.status(500).send("Internal Server Error");
          });
      });
    });
  };
}
module.exports = UsersController;
