import { ErrorRequestHandler as ErrorHandler }  from 'express';
export default interface ErrorRequestHandler extends ErrorHandler {
  code: number,
  message: string
}