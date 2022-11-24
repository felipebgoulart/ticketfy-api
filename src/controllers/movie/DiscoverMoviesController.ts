import { Request, Response } from "express";
import { PageableResponse } from "../../common/models/PageableResponse";
import { Movie } from "../../entities/Movie";
import { getDiscoverMovies } from "../../usecases/movie/getDiscoverMovies";
import { IMovieQuery } from "../../usecases/movie/interfaces/movieQuery";

export class DiscoverMoviesController {

  async index(req: Request, res: Response): Promise<Response> {
    const queryParams: IMovieQuery = req.query;

    const discoverMovies: PageableResponse<Movie> = await getDiscoverMovies(queryParams);

    return res.status(200).send(discoverMovies);
  }
}