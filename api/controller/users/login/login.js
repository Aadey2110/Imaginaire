const { User } = require("../../../models/users");

async function login(email, password) {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.otp || user.otpExpires) {
      throw new Error("User is not verified. Please verify your account.");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    await handleLogin(email, password);
    res.status(200).json({ success: true, message: "logged in successfully!" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "something went wrong" });
  }
}

module.exports = { handleLogin };
