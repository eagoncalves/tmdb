import * as Api from 'constants/api';
import * as Utils from 'utils/dates';

export default class Movie {

  getPathImage = (posterPath, poster) => {
      const { URL_BASE_IMG } = Api;
      if (poster) {
        return `${URL_BASE_IMG}/w780${posterPath}`
      } else {
        return `${URL_BASE_IMG}/w154${posterPath}`
      }
  }

  constructor(movie){
    this.id = movie.id;
    this.title = movie.title;
    this.average = Number(movie.vote_average / 2);
    this.imagePath = this.getPathImage(movie.poster_path, false);
    this.poster =  this.getPathImage(movie.backdrop_path, true);
    this.overview  = movie.overview;
    this.release = Utils.localDate(movie.release_date, 'pt-BR');
  }
}