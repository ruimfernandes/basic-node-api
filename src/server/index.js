import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createServer } from './server';
import routes from './routes';

export function start(config) {
  const { port } = config;

  const app = express();

  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.disable('x-powered-by');
  app.use(routes.initialize());

  return createServer(app, port);
}

export default {
  start
};
