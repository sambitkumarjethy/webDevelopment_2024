const express = require("express");

const router = express.Router();

const UserSignUpController = require("../controller/userSignUp");
const userSigninController = require("../controller/userSignIn");

router.post("/signup", UserSignUpController);
router.post("/signin", userSigninController);

module.exports = router;
