export default class TmdbSearchService {

  _apiBase = "https://api.themoviedb.org/3/search/movie/";
  _apiKey = "?api_key=de9b386a812a66fa48661258fd6c8359";

  _imageBase = "https://image.tmdb.org/t/p/w200";


  // https://api.themoviedb.org/3/search/movie?api_key=de9b386a812a66fa48661258fd6c8359&query=silicon

  getResource = async(searchValue, page) => {
    const res = await fetch(`${this._apiBase}${this._apiKey}&query=${searchValue}${page}`);

    if (!res.ok) {
      throw  new Error(`Could not search-fetch ${searchValue}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };

  getSearchResult = async(searchValue, page) => {
    return await this.getResource(searchValue, page);
  };

}
