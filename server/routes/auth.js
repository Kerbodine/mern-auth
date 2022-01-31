const router = require("express").Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");
const NoteList = require("../models/noteList");

router.post("/register", async (req, res) => {
  const validate = registerValidation(req.body);

  if (validate.error !== undefined) {
    res.status(400).send(validate.error.details[0].message);
  }

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    const noteList = new NoteList({
      userId: user._id,
    });
    const savedList = await noteList.save();
    res.status(200).send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const validate = loginValidation(req.body);
  if (validate.error !== undefined) {
    return res.status(400).send(validate.error.details[0].message);
  }
  // check if email exists in database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is wrong");

  // check password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or password is wrong");

  // create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res
    .header("auth-token", token)
    .json({ auth: true, token: token, userId: user._id });

  // res.send("Logged in successfully");
});

module.exports = router;
