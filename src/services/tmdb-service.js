export default class tmdbService {

  _apiBase = "https://api.themoviedb.org/3/movie/";
  _apiKey = "?api_key=de9b386a812a66fa48661258fd6c8359"

  _imageBase = "https://image.tmdb.org/t/p/w200";


  getResource = async(id) => {
    // const res = await fetch(`${this._apiBase}${url}${this._apiKey}&language=${language}`);
    // const res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=de9b386a812a66fa48661258fd6c8359`);
    const res = await fetch(`${this._apiBase}${id}${this._apiKey}`);

    if (!res.ok) {
      throw  new Error(`Could not fetch ` + `${id}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };

  getMovie = async(id) => {
    return await this.getResource(id);
  };

}
