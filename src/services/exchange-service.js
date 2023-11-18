export default class ExchangeService {
  static async getExchange(currencyFrom, currencyTo) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyFrom}/${currencyTo}`)
      .then(function (response) {
        if (!response.ok) {
          return response.json()
            .then(function (apiErrorMsg) {
              const errorMessage = `${response.status} ${response.statusText} ${apiErrorMsg['error-type']}`;
              throw new Error(errorMessage);
            });
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}