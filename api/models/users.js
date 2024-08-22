const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { modelsContants } = require("../constants/common");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  otpExpires: { type: Date },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: modelsContants.genderEnum, required: true },
  walletAmount: { type: Number, default: modelsContants.defaultWalletAmount },
  portfolio: [
    {
      asset: { type: String, required: true },
      quantity: { type: Number, required: true },
      purchasePrice: { type: Number, required: true },
      purchaseDate: { type: Date, required: true },
    },
  ],
  recentlyVisitedStocks: [
    {
      symbol: { type: String, required: true },
      exchange: { type: String, required: true },
      visitedAt: { type: Date, default: Date.now },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(modelsContants.bcryptSalt);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.addRecentlyVisitedStock = async function (symbol, exchange) {
  this.recentlyVisitedStocks.unshift({ symbol, exchange });

  if (
    this.recentlyVisitedStocks.length >
    modelsContants.recentlyVisitedStocksLimit
  ) {
    this.recentlyVisitedStocks.pop();
  }

  await this.save();
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
