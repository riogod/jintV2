import { rest } from 'msw';
import app from './data/app.json';


const handlers = [
    rest.get(`/data/app`, (req, res, ctx) =>
        res(ctx.json(app), ctx.set('Content-Type', 'application/json'), ctx.delay(500), ctx.status(200))
    ),

];

export default handlers;
