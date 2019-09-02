const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

const Users = require("./auth-model");

router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;

  const hashed = bcrypt.hashSync(user.password, 10);
  user.password = hashed;

  Users.insert(user)
    .then(newUser => {
      res.status(201).json({
        message: `Welcome ${newUser.username}! Enjoy some jokes...`
      });
    })
    .catch(err => {
      res.status(500).json({ message: "We done messed up...Sorry!", err });
    });
});
router.post("/login", (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken(user);
        res.status(200).json({ message: `Welcome back!`, token });
      } else {
        res.status(401).json({ message: "It ain't happening, dude!" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

const createToken = user => {
  const payload = {
    subject: user,
    username: user.username
  };

  const scrt = secret.jwtSecret;

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, scrt, options);
};
module.exports = router;
