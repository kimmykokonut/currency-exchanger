export default class ExchangeService {
  static async getExchange(currencyFrom, currencyTo) {
    const cacheKey = `${currencyFrom}_${currencyTo}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyFrom}/${currencyTo}`)
      .then(function (response) {
        console.log(response);
        if (!response.ok) {
          return response.json()
            .then(function (apiErrorMsg) {
              // console.log(apiErrorMsg);
              const errorMessage = `${response.status} ${response.statusText} ${apiErrorMsg['error-type']}`;
              throw new Error(errorMessage);
            });
        } else {
          const responseData = response.json();
          sessionStorage.setItem(cacheKey, JSON.stringify(responseData));
          return responseData;
        }
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  }
}