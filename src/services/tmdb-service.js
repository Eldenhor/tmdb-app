export default class TmdbService {

  _apiBase = "https://api.themoviedb.org/3/movie/";
  _apiKey = "?api_key=de9b386a812a66fa48661258fd6c8359"

  _imageBase = "https://image.tmdb.org/t/p/w200";


  getResource = async(url, language) => {
    const res = await fetch(`${this._apiBase}${url}${this._apiKey}&language=${language}`);

    if (!res.ok) {
      throw  new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };

  getMovie = async(id, lang) => {
    return await this.getResource(id, lang);
  };

}
