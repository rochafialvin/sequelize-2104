const router = require("express").Router();
const { Op } = require("sequelize");
const Address = require("../../models/Address");
const User = require("../../models/User");

const getUserController = async (req, res, next) => {
  try {
    // get all users
    //  const resGetUsers = await User.findAll();

    // specific columns (include)
    //  const resGetUsers = await User.findAll({
    //    attributes: ["userId", "username", "email"],
    //  });

    // specific column (exclude)
    //  const resGetUsers = await User.findAll({
    //    attributes: { exclude: ["createdAt", "updatedAt"] },
    //  });

    // alias, kolom username akan ditampilkan dengan nama name
    //  const resGetUsers = await User.findAll({
    //    attributes: ["userId", ["username", "name"], "email"],
    //  });

    // condition, and
    //  const resGetUsers = await User.findAll({
    //    attributes: ["userId", ["username", "name"], "email", "isVerified"],
    //    where: {
    //      isVerified: true,
    //      username: {
    //        [Op.like]: "%o%",
    //      },
    //    },
    //  });

    // condition, verified
    //  const resGetUsers = await User.findAll({
    //    attributes: ["userId", ["username", "name"], "email", "isVerified"],
    //    where: {
    //      [Op.and]: [{ isVerified: 1 }, { username: { [Op.like]: "%o%" } }],
    //    },
    //  });

    // limit, offset
    //  const resGetUsers = await User.findAll({
    //    attributes: ["userId", ["username", "name"], "email", "isVerified"],
    //    where: {
    //      isVerified: 1,
    //    },
    //    limit: 3,
    //    offset: 2,
    //  });

    // condition, verified
    //  const resGetUsers = await User.findAll({
    //    attributes: ["userId", ["username", "name"], "email", "isVerified"],
    //    where: {
    //      isVerified: 1,
    //      age: { [Op.not]: null },
    //    },
    //    limit: 2,
    //    offset: 1,
    //  });

    // in
    //  const resGetUsers = await User.findAll({
    //    attributes: [
    //      "userId",
    //      ["username", "name"],
    //      "email",
    //      ["age", "umur"],
    //      "isVerified",
    //    ],
    //    where: {
    //      isVerified: 1,
    //      age: [25, 35], // same as [Op.in] : [25, 35]
    //    },
    //    limit: 2,
    //    offset: 1,
    //  });

    //  const resGetUsers = await User.findAll({
    //    attributes: [
    //      "userId",
    //      ["username", "name"],
    //      "email",
    //      ["age", "umur"],
    //      "isVerified",
    //    ],
    //    where: {
    //      isVerified: 1,
    //      age: { [Op.gte]: 30 }, // age >= 30
    //      gender: { [Op.is]: null },
    //    },
    //    limit: 5,
    //    offset: 1,
    //  });

    //  const resGetUsers = await User.findAll({
    //    include: [
    //      {
    //        model: Address,
    //        as: "addresses",
    //      },
    //    ],
    //  });

    res.send({
      message: "User List",
      data: { ressult: resGetUsers },
    });
  } catch (error) {
    next(error);
  }
};

router.get("/", getUserController);

module.exports = router;
