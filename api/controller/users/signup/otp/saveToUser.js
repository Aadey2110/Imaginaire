const { User } = require("../../../../models/users");

async function saveOTPToUser(email, otp) {
  const otpExpires = new Date(Date.now() + 30 * 60 * 1000);

  let user = await User.findOneAndUpdate({ email }, { otp, otpExpires });

  if (!user) {
    throw new Error("User not found");
  }
}

module.exports = { saveOTPToUser };
