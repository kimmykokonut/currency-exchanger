import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchange-service.js';

async function getAPIData(selectCurrency, howMuchMoney) {
  ExchangeService.getExchange(selectCurrency)
    .then(function (exchangeResponse) {
      if (exchangeResponse instanceof Error) {
        const errorMessage = `There was a problem accessing the conversion exchange data from Exchange Rate API for ${selectCurrency}: ${exchangeResponse.message}`;
        throw new Error(errorMessage);
      }
      const convRate = exchangeResponse.conversion_rate;
      printRates(selectCurrency, convRate, howMuchMoney);
    })
    .catch(function (error) {
      printError(error);
    });
}

function printRates(selectCurrency, convRate, howMuchMoney) {
  document.querySelector('#result').innerText = `The conversion rate for USD to ${selectCurrency} is ${convRate}. ${howMuchMoney} USD = ${(howMuchMoney * convRate)} ${selectCurrency}.`;
}

function printError(error) {
  document.querySelector('#error').innerText = error;
}

function clearResults() {
  document.querySelector('#result').innerText = null;
  document.querySelector('#error').innerText = null;
}

function handleConversionForm(e) {
  e.preventDefault();
  clearResults();
  const howMuchMoney = document.querySelector('#qtyInput').value;
  document.querySelector('#qtyInput').value = null;
  const selectCurrency = document.getElementById('currency').value;
  getAPIData(selectCurrency, howMuchMoney);  //assume start usd at this point. maybe add second param later
  //--------------------------
}

window.addEventListener("load", function () {
  document.querySelector("#currency-exchange-form").addEventListener("submit", handleConversionForm);
});