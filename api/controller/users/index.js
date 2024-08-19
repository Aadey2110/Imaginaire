const {
  handleSignup,
  handleOtpVerification,
  handleResendOtp,
} = require("./signup/index");
const { handleLogin } = require("./login/index");

module.exports = {
  handleSignup,
  handleOtpVerification,
  handleResendOtp,
  handleLogin,
};
