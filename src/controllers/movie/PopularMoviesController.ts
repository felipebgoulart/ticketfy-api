import { Request, Response } from "express";
import { PageableResponse } from "../../common/models/PageableResponse";
import { Movie } from "../../entities/Movie";

import { getPopularMovies } from '../../usecases/movie/getPopularMovies';
import { IMovieQuery } from "../../usecases/movie/interfaces/movieQuery";

export class PopularMoviesController {

  async index(req: Request, res: Response): Promise<Response> {
    const queryParams: IMovieQuery = req.query;

    const popularMovies: PageableResponse<Movie> = await getPopularMovies(queryParams);

    return res.status(200).json(popularMovies);
  }

}
