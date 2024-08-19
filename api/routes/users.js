const express = require("express");
const {
  handleSignup,
  handleOtpVerification,
  handleResendOtp,
  handleLogin,
} = require("../controller/users/index");

const router = express.Router();

router.post("/signup", handleSignup);
router.post("/otp/verify", handleOtpVerification);
router.get("/otp/resend", handleResendOtp);
router.post("/login", handleLogin);

module.exports = router;
