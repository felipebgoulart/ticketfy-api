import { Request, Response } from "express";
import { PageableResponse } from "../../common/models/PageableResponse";
import { Movie } from "../../entities/Movie";
import { getUpcomingMovies } from "../../usecases/movie/getUpcomingMovies";
import { IMovieQuery } from "../../usecases/movie/interfaces/movieQuery";

export class UpcomingMoviesController {
  
  async index(req: Request, res: Response): Promise<Response> {
    const queryParams: IMovieQuery = req.query;

    const upcomingMovies: PageableResponse<Movie> = await getUpcomingMovies(queryParams);

    return res.status(200).json(upcomingMovies);
  }
}