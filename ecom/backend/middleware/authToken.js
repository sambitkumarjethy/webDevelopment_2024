const jwt = require("jsonwebtoken");
async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res(200).json({
        message: "User is not Login .",
        error: true,
        success: false,
      });
    }

    // verify a token symmetric
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log(err);
      console.log("decoded", decoded);
      if (err) {
        console.log("error auth", err);
      }
      // Initialize req.user if it doesn't exist
      req.user = req.user || {};
      req.user.id = decoded?._id;
      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      data: [],
      err: true,
      success: false,
    });
  }
}

module.exports = authToken;
