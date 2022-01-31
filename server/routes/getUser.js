const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/user");

router.get("/getUser", verify, async (req, res) => {
  console.log(req.user._id);
  try {
    await User.findById(req.user._id, (err, user) => {
      console.log(user);
      if (err) return res.status(400).send(err);
      res.json({
        userId: user._id,
        userName: `${user.firstName} ${user.lastName}`,
        userEmail: user.email,
      });
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
