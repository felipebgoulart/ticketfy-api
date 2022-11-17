import { NextFunction, Request, Response } from "express";
import { BusinessError } from "../helpers/BusinessError";

export const middlewareErrorHandler = (
  error: Error & Partial<BusinessError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customErrorHandler = error.statusCode != null;

  console.log(error.message);
  

  return res.send(
    {
      'timestamp': new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'}),
      'error': customErrorHandler ? error.error : 'Internal Server Error',
      'status': customErrorHandler ? error.statusCode : 500,
      'message': customErrorHandler ? error.message : 'An unexpected error occurred, please contact the administrator'
    }
  );
}