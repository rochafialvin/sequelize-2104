const router = require("express").Router();
const User = require("../../models/User");

const registerUserController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const resCreateUser = await User.create({ username, email, password });

    res.send({
      message: "Registration success",
      data: { ressult: resCreateUser },
    });
  } catch (error) {
    next(error);
  }
};

router.post("/", registerUserController);

module.exports = router;
