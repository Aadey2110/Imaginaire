const { User } = require("../../../models/users");

async function addRecentlyVisitedStock(email, symbol, stockExchange) {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    user.addRecentlyVisitedStock(symbol, stockExchange);

    await user.save();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

async function handleRecentlyVisitedStocks(req, res) {
  try {
    const { email, symbol, stockExchange } = req.body;
    await addRecentlyVisitedStock(email, symbol, stockExchange);
    res.status(200).json({
      success: true,
      message: "recently visited stocks list updated successfully",
    });
  } catch (error) {
    console.log(
      "Error from handleReceltyVisitedStocks -> /controller/users/activity/lastVisited.js"
    );
    res.status(401).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = {
  handleRecentlyVisitedStocks,
};
