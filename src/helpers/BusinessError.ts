import { StatusCode } from "../common/constants/statusCode";

export class BusinessError extends Error {

  public readonly statusCode: number;
  public readonly error: string;

  constructor(error: string, message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }
}

export class NotFoundError extends BusinessError {

  constructor(message?: string) {
    super('Not Found', message?? 'An error occured, resource not found', StatusCode.notFound);
  }
}

export class BadRequestError extends BusinessError {

  constructor(message?: string) {
    super('Bad Request', message?? 'An error occured, server could not process the request', StatusCode.badRequest);
  }
}

export class HttpError extends BusinessError {

  constructor(error?: any) {
    super('Http Error', 'An error occured while call http', StatusCode.internalServerError);
  }
}
