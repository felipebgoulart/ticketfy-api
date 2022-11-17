import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import { middlewareErrorHandler } from './middlewares/errorHandler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(middlewareErrorHandler);

app.listen(process.env.PORT);
