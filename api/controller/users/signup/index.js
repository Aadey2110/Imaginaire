const { handleSignup } = require("./signup");
const { handleOtpVerification } = require("./verify");
const { handleResendOtp } = require("./otp/index");

module.exports = { handleSignup, handleOtpVerification, handleResendOtp };
