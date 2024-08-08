const { getNseStocksSymbols } = require("./nse/info/symbols");
const { getNseStockDetails } = require("./nse/info/details");
const { getNseStockHistory } = require("./nse/info/history");

async function getStocksSymbol(req, res) {
  try {
    switch (req.params.stockExchange) {
      case "nse":
        return res.status(200).json({
          symbols: await getNseStocksSymbols(),
          message: "sent successfully",
        });
      default:
        return res.status(200).json({ message: "Unrecognised Stock Exchange" });
    }
  } catch (err) {
    console.error(err);
    console.log("Error from controller/NSE.js -> getStocksSymbol()");
    return res.status(500).json({ message: "internal server error" });
  }
}

async function getStockDetails(req, res) {
  try {
    switch (req.params.stockExchange) {
      case "nse":
        return res.status(200).json({
          detail: await getNseStockDetails(req.params.symbol),
          message: "sent successfully",
        });
      default:
        return res.status(200).json({ message: "Unrecognised Stock Exchange" });
    }
  } catch (err) {
    console.error(err);
    console.log("Error from controller/NSE.js -> getStockDetails()");
    return res.status(500).json({ message: "internal server error" });
  }
}

async function getStockHistory(req, res) {
  try {
    switch (req.params.stockExchange) {
      case "nse":
        return res.status(200).json({
          detail: await getNseStockHistory({
            symbol: req.params.symbol,
            from: req.params.from,
            to: req.params.to,
          }),
          message: "sent successfully",
        });
      default:
        return res.status(200).json({ message: "Unrecognised Stock Exchange" });
    }
  } catch (err) {
    console.error(err);
    console.log("Error from controller/NSE.js -> getStockHistory()");
    return res.status(500).json({ message: "internal server error" });
  }
}

module.exports = { getStocksSymbol, getStockDetails, getStockHistory };
