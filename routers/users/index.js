const router = require("express").Router();

const postUserRouter = require("./post.user");
const getUserRouter = require("./get.user");
const patchUserRouter = require("./patch.user");
const deleteUserRouter = require("./delete.user");

router.use(postUserRouter);
router.use(getUserRouter);
router.use(patchUserRouter);
router.use(deleteUserRouter);

module.exports = router;
