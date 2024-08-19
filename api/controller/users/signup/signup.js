const { sendAndSaveOtp } = require("./otp/index");
const { User } = require("../../../models/users");

async function addUser(userData) {
  try {
    const newUser = new User(userData);
    await newUser.save();
  } catch (error) {
    console.error("Sign-up error:", error.message);
    throw error;
  }
}

async function signup(user) {
  await addUser(user);
  await sendAndSaveOtp(user.email);
}

async function handleSignup(req, res) {
  try {
    const user = req.body;
    await signup(user);
    res.status(200).json({ success: true, message: "otp successfully sent!" });
  } catch (error) {
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

module.exports = { handleSignup };
