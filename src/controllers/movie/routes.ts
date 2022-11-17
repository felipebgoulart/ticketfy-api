import { Router } from "express";
import { morganMiddleware } from "../../middlewares/morganHandler";
import { PopularMoviesController } from "./PopularMoviesController";

const movieRoutes = Router();

const popularMoviesController = new PopularMoviesController();

movieRoutes.get('/movies/popular', morganMiddleware(), popularMoviesController.index);

export default movieRoutes;
 