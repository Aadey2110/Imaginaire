const { getNseStockDetails } = require("./details");
const { getNseStockHistory } = require("./history");
const { getNseStocksSymbols } = require("./symbols");

module.exports = {
  getNseStockDetails,
  getNseStockHistory,
  getNseStocksSymbols,
};
