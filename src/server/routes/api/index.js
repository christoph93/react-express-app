/**
 * Handle routes to /api
 */
import Router from 'express';
import { attachControllers } from '@decorators/express';

import Greet from './greet';
import Config from './apiConfig';

const apiRouter = Router();

attachControllers(apiRouter, [Greet, Config]);

export default apiRouter;
