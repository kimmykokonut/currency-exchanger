import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchange-service.js';

async function getAPIData(currencyTo, howMuchMoney, currencyFrom) {
  ExchangeService.getExchange(currencyFrom, currencyTo)
    .then(function (exchangeResponse) {
      if (exchangeResponse instanceof Error) {
        const errorMessage = `There was a problem accessing the conversion exchange data from Exchange Rate API for ${currencyTo}: ${exchangeResponse.message}`;
        throw new Error(errorMessage);
      }
      const convRate = exchangeResponse.conversion_rate;
      printRates(currencyFrom, currencyTo, convRate, howMuchMoney);
    })
    .catch(function (error) {
      printError(error);
    });
}

function printRates(currencyFrom, currencyTo, convRate, howMuchMoney) {
  (document.getElementById('answers')).setAttribute("class", "card");
  document.querySelector('#result').innerText = `The conversion rate for ${currencyFrom} to ${currencyTo} is ${convRate}. 
  ${howMuchMoney} ${currencyFrom} = ${(howMuchMoney * convRate)} ${currencyTo}.`;
}

function printError(error) {
  document.querySelector('#error').innerText = error;
}

function printCustomError(currencyTo) {
  document.querySelector('#error').innerText = `Sorry, we don't offer exchange rate data for North Korea ${currencyTo} due to sanctions & lack of any international trade.`;
}

function clearResults() {
  document.querySelector('#result').innerText = null;
  document.querySelector('#error').innerText = null;
}

function handleConversionForm(e) {
  e.preventDefault();
  clearResults();
  // const nameInput = document.querySelector('#nameInput').value;
  const howMuchMoney = document.querySelector('#qtyInput').value;
  document.querySelector('#qtyInput').value = null;
  const currencyFrom = document.getElementById('currencyFrom').value;
  const currencyTo = document.getElementById('currency').value;
  if (currencyTo === 'KPW') {
    printCustomError(currencyTo);
  } else {
    getAPIData(currencyTo, howMuchMoney, currencyFrom);
  }
}

window.addEventListener("load", function () {
  const icon = document.querySelector('#fontAwe');
  icon.src = `${process.env.FONT_KEY}`;
  icon.crossorigin = `${process.env.FONT_CO}`;
  document.querySelector("#currency-exchange-form").addEventListener("submit", handleConversionForm);
});