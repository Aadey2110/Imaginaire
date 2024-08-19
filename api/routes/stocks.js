const express = require("express");
const {
  getStocksSymbol,
  getStockDetails,
  getStockHistory,
} = require("../controller/stocks/info");

const router = express.Router();

router.get("/symbols/:stockExchange", getStocksSymbol);
router.get("/details/:stockExchange/:symbol", getStockDetails);
router.get("/history/:stockExchange/:symbol/:from/:to", getStockHistory);
module.exports = router;
