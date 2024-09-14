const userModel = require("../models/userModels");
async function userDetailController(req, res) {
  try {
    console.log("user", req.user.id);

    const user = await userModel.findById(req.user.id);

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User  details",
    });
    console.log(user);
  } catch {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userDetailController;
