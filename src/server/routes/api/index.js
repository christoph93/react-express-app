/**
 * Handle routes to /api
 */
import Router from 'express';
import { attachControllers } from '@decorators/express';

import Greet from './greet';
import Config from './apiConfig';
import Rates from './rates';

const apiRouter = Router();

attachControllers(apiRouter, [Greet, Config, Rates]);

export default apiRouter;
