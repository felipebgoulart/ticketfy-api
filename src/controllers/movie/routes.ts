import { Router } from "express";
import { morganMiddleware } from "../../middlewares/morganHandler";
import { DiscoverMoviesController } from "./DiscoverMoviesController";
import { PopularMoviesController } from "./PopularMoviesController";
import { TopRatedMoviesController } from "./TopRatedMoviesController";
import { UpcomingMoviesController } from "./UpcomingMoviesController";

const movieRoutes = Router();

const popularMoviesController = new PopularMoviesController();
const dicoveredMoviesController = new DiscoverMoviesController();
const topRatedMoviesController = new TopRatedMoviesController();
const upcomingMoviesController = new UpcomingMoviesController();

movieRoutes.get('/movies/:id', morganMiddleware(), popularMoviesController.index);
movieRoutes.get('/movies/popular', morganMiddleware(), popularMoviesController.index);
movieRoutes.get('/movies/discover', morganMiddleware(), dicoveredMoviesController.index);
movieRoutes.get('/movies/top-rated', morganMiddleware(), topRatedMoviesController.index);
movieRoutes.get('/movies/upcoming', morganMiddleware(), upcomingMoviesController.index);

export default movieRoutes;
 