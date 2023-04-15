// Initialize variables
const apiKey = "YOUR_API_KEY_HERE";
const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`;
const tronCryptos = []; // "TRX","BTT","APENFT", "JST", "USDD", "USDJ", "WTRX", "BTTOLD", "WIN","KLV"
const riskScore = {};

// Fetch data from API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract Tron-based cryptocurrencies and risk score
    data.data.forEach(crypto => {
      if (crypto.platform && crypto.platform.name === "TRON") {
        tronCryptos.push(crypto.name);
      }
      riskScore[crypto.name] = crypto.metrics.market_data.fcas_score;
    });
    
    // Sort risk scores in descending order
    const sortedScores = Object.entries(riskScore).sort((a, b) => b[1] - a[1]);
    
    // Get top 10 Tron-based cryptocurrencies
    const top10TronCryptos = tronCryptos.filter(crypto => {
      return sortedScores.findIndex(score => score[0] === crypto) < 10;
    });
    
    // Log results
    console.log("Top 10 Tron-based cryptocurrencies:");
    console.log(top10TronCryptos);
    console.log("Risk scores:");
    console.log(riskScore);
  })
  .catch(error => {
    console.log(error);
  });
  .catch(error => {
    console.error(error);
  });
