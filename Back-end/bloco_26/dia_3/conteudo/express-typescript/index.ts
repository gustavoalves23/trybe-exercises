import express, {Request, Response, NextFunction} from 'express';
import Books from './Routes/books';
import bodyParser from 'body-parser';
import ErrorRequestHandler from './interfaces/ErrorRequestHandler';

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use(Books);

app.get('/', (_req:Request, res:Response) => {
  res.send('Express + Typescript')
});

const errorHandler = (error: ErrorRequestHandler, _req: Request, res: Response, _next: NextFunction) => {
  const {code, message} = error;
  res.status(code).json(message);
}

app.use(errorHandler);


app.listen(PORT);