const router = require("express").Router();
const User = require("../../models/User");

const updateUserController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { age, gender, password } = req.body;

    const resUpdateUser = await User.update(
      { age, gender, password },
      {
        where: {
          userId,
        },
      }
    );

    res.send({
      message: "Update user success",
      data: { ressult: resUpdateUser },
    });
  } catch (error) {
    next(error);
  }
};

router.patch("/:userId", updateUserController);

module.exports = router;
