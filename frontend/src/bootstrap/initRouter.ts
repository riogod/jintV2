import createRouter, { Router } from 'router5';
import loggerPlugin from 'router5-plugin-logger';
import browserPlugin from 'router5-plugin-browser';
import { routes } from './config/routes';

export const configureRouter = (): Router => {
  const router = createRouter(routes, {
    defaultRoute: 'main'
  });

  if (process.env.NODE_ENV === 'development') {
    router.usePlugin(loggerPlugin);
  }

  router.usePlugin(browserPlugin());

  return router;
};
