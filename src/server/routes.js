import { Router } from 'express';
import User from './controllers/user';

export const initialize = () => {
  const api = Router();

  api.use('/user', User);

  return api;
};

export default {
  initialize
};
