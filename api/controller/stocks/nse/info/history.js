const { NseIndia } = require("stock-nse-india");
const nseIndia = new NseIndia();

async function getNseStockHistory({ symbol, from, to }) {
  try {
    const range = {
      start: new Date(from),
      end: new Date(to),
    };
    return await nseIndia.getEquityHistoricalData(symbol, range);
  } catch (err) {
    console.log(
      "Error from ./controller/nse/info/history.js -> getStockHistory()"
    );
    throw err;
  }
}

module.exports = { getNseStockHistory };
