const keys = require("../config/keys");
const express = require("express");
const router = express.Router();
const UserAuth = require("../models/UserAuth");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
//https://express-validator.github.io/docs/
const { check, validationResult } = require("express-validator");

// @route GET api/users
// @desc Test Route route
// @access Public
router.get("/", async (req, res) => {
  const users = await UserAuth.find().populate("user", ["name"]);
  res.json(users);
});

router.post(
  "/api/user",
  [
    // username must be an email
    check("name", "Name is require")
      .not()
      .isEmpty(),
    // email check valid
    check("email", "Please include valid email").isEmail(),
    // password must be at least 6 chars long
    check("password", "password must be at least 6 chars long").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // See if the user exists
      //let user = await User.findOne({ email });
      let user = await UserAuth.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Acount already exists" }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new UserAuth({
        name,
        email,
        avatar,
        password
      });

      // Encrrypt password
      // create salt

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // save the use
      await user.save();
      const payload = {
        user: {
          id: user.id
        }
      };

      // Return jsonwebtoken
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      //console.log(req.body);
      // res.send("User register");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

// @route Post api/users
// @desc Test Route route
// @access Public

module.exports = router;
