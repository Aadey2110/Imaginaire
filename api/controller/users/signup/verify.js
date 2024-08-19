const { User } = require("../../../models/users");

async function verifyOTP(email, otp) {
  let user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.otp !== otp || user.otpExpires < Date.now()) {
    throw new Error("Invalid or expired OTP");
  }

  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();
}

async function handleOtpVerification(req, res) {
  try {
    const { email, otp } = req.body;
    await verifyOTP(email, otp);
    res.status(200).json({ success: true, message: "Verified Successfully!" });
  } catch (error) {
    res.status(401).json({ success: false, message: "Somwthing went wrong" });
  }
}

module.exports = { handleOtpVerification };
