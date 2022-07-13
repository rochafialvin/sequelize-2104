const router = require("express").Router();
const User = require("../../models/User");

const deleteUserController = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const resUpdateUser = await User.destroy({ where: { userId } });

    res.send({
      message: "Update user success",
      data: { ressult: resUpdateUser },
    });
  } catch (error) {
    next(error);
  }
};

router.delete("/:userId", deleteUserController);

module.exports = router;
