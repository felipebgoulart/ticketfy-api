import morgan from 'morgan';

export const morganMiddleware = (format?: string) => {
  return morgan(':method :url :status :res[content-length] - :response-time ms');
};