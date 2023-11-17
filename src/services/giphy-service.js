export default class GiphyService {
  static async getGif(query) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_KEY}&q=${query}&limit=3`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}