function searchStock() {
    var symbol = document.getElementById('search-input').value;
    var apiKey = 'WZLZEK5R2TMTWF6'; // Replace with your Alpha Vantage API key
  
    // Make API request
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.BSE&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if(data['Global Quote']) {
          var stockInfo = data['Global Quote'];
          var output = `
            <h2>${symbol} Stock Information</h2>
            <ul>
              <li>Open: ${stockInfo['02. open']}</li>
              <li>High: ${stockInfo['03. high']}</li>
              <li>Low: ${stockInfo['04. low']}</li>
              <li>Price: ${stockInfo['05. price']}</li>
              <li>Volume: ${stockInfo['06. volume']}</li>
            </ul>
          `;
          document.getElementById('stock-data').innerHTML = output;
        } else {
          document.getElementById('stock-data').innerHTML = '<p>Stock symbol not found.</p>';
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  