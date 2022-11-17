import 'dotenv/config';

import axios, { AxiosRequestConfig } from 'axios';
import { IMovieQuery } from './interfaces/movieQuery';
import { IMovieDTO } from './interfaces/movieDto';
import { Movie } from './models/Movie';
import { PageableResponse } from '../../common/models/PageableResponse';
import { IPageableDTO } from '../../common/interfaces/pageableDto';
import { HttpError } from '../../helpers/BusinessError';

export async function getPopularMovies(params: IMovieQuery): Promise<PageableResponse<Movie>> {
  const baseUrl = process.env.TMDB_URL;
  let movies: Movie[] = [];

  const config: AxiosRequestConfig = {
    params: {
      api_key: process.env.APPKEY + 'eu',
      language: params.lang,
      page: params.page
    }
  };

  await axios.get(`${baseUrl}/movie/popular`, config)
    .then(res => {
      const response: IPageableDTO<IMovieDTO> = res.data;

      response.results.forEach(movie => {
        movies.push({
          id: movie.id.toString(),
          title: movie.title,
          synopsis: movie.overview,
          genre_ids: movie.genre_ids,
          poster_url: movie.backdrop_path,
          note_average: movie.vote_average,
          release_date: movie.release_date
        })
      })
    }).catch(error => {
      throw new HttpError(error);
    });
  
  return {
    totalResults: movies.length,
    data: movies
  };
}
