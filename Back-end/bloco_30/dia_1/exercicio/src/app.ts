import express from 'express';
import router from './routes';
import connection from './models/connection';

export default class App {
  public app: express.Application;
  public connection: Promise<typeof import('mongoose')>;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.connection = connection();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', router);
  }

  listen() {
    this.app.listen(process.env.PORT || 3000);
  }
}