import { Request, Response } from "express";
import { PageableResponse } from "../../common/models/PageableResponse";
import { Movie } from "../../entities/Movie";
import { getTopRatedMovies } from "../../usecases/movie/getTopRatedMovies";
import { IMovieQuery } from "../../usecases/movie/interfaces/movieQuery";

export class TopRatedMoviesController {
  
  async index(req: Request, res: Response): Promise<Response> {
    const queryParams: IMovieQuery = req.query;

    const topRatedMovies: PageableResponse<Movie> = await getTopRatedMovies(queryParams);

    return res.status(200).json(topRatedMovies);
  }
}