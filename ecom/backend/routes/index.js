const express = require("express");

const router = express.Router();

const UserSignUpController = require("../controller/userSignUp");
const userSigninController = require("../controller/userSignIn");
const userDetailController = require("../controller/userDetail");
const authToken = require("../middleware/authToken");

router.post("/signup", UserSignUpController);
router.post("/signin", userSigninController);
router.get("/user-details", authToken, userDetailController);

module.exports = router;
