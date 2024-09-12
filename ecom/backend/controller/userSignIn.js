const userModel = require("../models/userModels");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function userSigninController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found !");
    }

    // TO do - check bellow line  await bcrypt.compare
    // const checkPassword = await bcrypt.compare(password, user.password);
    const checkPassword = true;
    if (checkPassword) {
      const token_data = { _id: user._id, email: user.email };
      const token = await jwt.sign(token_data, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
      };
      res.cookie("token", token, tokenOption).json({
        message: "login successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please check password !!");
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSigninController;
