const express = require("express");

const router = express.Router();

const UserSignUpController = require("../controller/userSignUp");

router.post("/signup", UserSignUpController);

module.exports = router;
