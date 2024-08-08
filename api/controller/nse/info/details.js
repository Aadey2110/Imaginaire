const { NseIndia } = require("stock-nse-india");
const nseIndia = new NseIndia();

async function getNseStockDetails(symbol) {
  try {
    return await nseIndia.getEquityDetails(symbol);
  } catch (err) {
    console.log(
      "Error from ./controller/nse/info/details.js -> getStockDetails()"
    );
    throw err;
  }
}

module.exports = { getNseStockDetails };
