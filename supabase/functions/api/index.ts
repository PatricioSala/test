import { Hono } from 'jsr:@hono/hono'

import mainRouter from './routes/mainRouter.ts';
import authRouter from "./routes/authRouter.ts";
import postsRouter from './routes/postsRouter.ts';
import usersRouter from './routes/usersRouter.ts';

const app = new Hono().basePath('/api');

app.route("/", mainRouter);
app.route("/auth", authRouter);
app.route("/posts", postsRouter);
app.route("/users", usersRouter);

Deno.serve(app.fetch);