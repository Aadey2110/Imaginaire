const { NseIndia } = require("stock-nse-india");

const nseIndia = new NseIndia();

async function getNseStocksSymbols() {
  try {
    return await nseIndia.getAllStockSymbols();
  } catch (err) {
    console.error(err);
    console.log("Error from controller/NSE.js -> getNseStocksSymbols()");
  }
}

module.exports = { getNseStocksSymbols };
