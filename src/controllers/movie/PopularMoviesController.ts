import { Request, Response } from "express";

import { getPopularMovies } from '../../usecases/movie/getPopularMovies';
import { IMovieQuery } from "../../usecases/movie/interfaces/movieQuery";

export class PopularMoviesController {

  async index(req: Request, res: Response): Promise<Response> {
    const page: IMovieQuery = req.query;

    const json = await getPopularMovies(page);

    return res.status(200).json(json);
  }

}
