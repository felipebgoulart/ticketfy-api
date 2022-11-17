import { Router } from "express";
import movieRoutes from "./controllers/movie/routes";

const routes = Router();

routes.use(movieRoutes);

export default routes;
 