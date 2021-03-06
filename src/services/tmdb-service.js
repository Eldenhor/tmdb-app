export default class tmdbService {

  _apiBase = "https://api.themoviedb.org/3/movie/";
  _apiKey = "?api_key=de9b386a812a66fa48661258fd6c8359"

  _imageBase = "https://image.tmdb.org/t/p/w200";


  getResource = async(id) => {
    const res = await fetch(`${this._apiBase}${id}${this._apiKey}&language=en-US`);

    if (!res.ok) {
      throw  new Error(`Could not fetch ${id}, received ${res.status}`);
    }
    return await res.json();
  };

  getMovie = async(id) => {
    return await this.getResource(id);
  };

}
