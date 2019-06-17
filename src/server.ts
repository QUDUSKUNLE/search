import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './routes';

dotenv.config();

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
const PORT = process.env.PORT;
const server = http.createServer(router);


server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
