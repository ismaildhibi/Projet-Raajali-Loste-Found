const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const passport = require("passport");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

router.post("/register", (req, res) => {
  const { login, email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (user) {
      return res.json({ msg: "user already exist" });
    } else {
      const newuser = new User({ login, email, password });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
          newuser.password = hash;
          console.log(hash);
          newuser
            .save()
            .then(user => res.send(user))
            .catch(err => {
              res.send(err);
            });
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.json({ msg: "email not exist" });
    } else {
      bcrypt.compare(password, user.password).then(isMatched => {
        if (isMatched) {
          const payload = { id: user.id, email: user.email };
          jwt.sign(
            payload,
            config.get("secretkey"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({ token: "Bearer " + token });
            }
          );
        } else {
          return res.json({ msg: "password incorrect" });
        }
      });
    }
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
