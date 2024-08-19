const { generateOTP } = require("./generate");
const { saveOTPToUser } = require("./saveToUser");
const { sendEmail } = require("../../../../service/mailer");

async function generateAndSaveOTP(email) {
  const otp = generateOTP();
  await saveOTPToUser(email, otp);
}

async function sendOTPToEmail(receiverEmail, otp) {
  const message = `Your OTP is ${otp}. It is valid for 30 minutes.`;
  try {
    await sendEmail(receiverEmail, message);
    return otp;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
}

async function sendAndSaveOtp(email) {
  const otp = await generateAndSaveOTP(email);
  await sendOTPToEmail(email, otp);
}

async function handleResendOtp(req, res) {
  try {
    const { email } = req.body;
    sendAndSaveOtp(email);
    res.status(200).json({ success: true, message: "otp sent successfully" });
  } catch (error) {
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

module.exports = { handleResendOtp, sendAndSaveOtp };
