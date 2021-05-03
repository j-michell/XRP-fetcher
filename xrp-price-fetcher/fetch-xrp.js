var displayValue = displayValue;

function fetchXrp() {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=GBP').then(response => {
      if (!response.ok) {
          throw Error("Error, couldn't connect to API");
      }
      return response.json();
  }).then(data => {
      console.log(data);
      displayValue = Object.values(data).map(GBP => {
          return `
          <p style='margin:0;'>${GBP}</p>`;
      }).join('');
      document.querySelector('#display-xrp-price').innerHTML = displayValue;      
      
      for(let value of Object.values(data)){
          displayValue = value;
      }
      console.log(displayValue);

  }).catch(error => {
      console.log(error);
  });
}


function exchange() {
    console.log(displayValue);
    var xrpAmount = document.getElementById('amount').value;
    var xrpWorth = displayValue;
    var exchangeAmount = xrpAmount * xrpWorth;
    document.getElementById('result').innerHTML = exchangeAmount.toFixed(2);
}

fetchXrp();
return `<p>Temperature: ${temp}</p>`
