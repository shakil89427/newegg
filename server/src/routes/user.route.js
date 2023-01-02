const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const tokenHelper = require("../helpers/tokenHelper");

router.get("/", tokenHelper.verifyAccessToken, userController.getUser);
router.post("/", tokenHelper.verifyNewUserToken, userController.addUser);

module.exports = router;
