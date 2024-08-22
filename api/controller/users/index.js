const {
  handleSignup,
  handleOtpVerification,
  handleResendOtp,
} = require("./signup/index");
const { handleLogin } = require("./login/index");
const { handleRecentlyVisitedStocks } = require("./activity/index");

module.exports = {
  handleSignup,
  handleOtpVerification,
  handleResendOtp,
  handleLogin,
  handleRecentlyVisitedStocks,
};
