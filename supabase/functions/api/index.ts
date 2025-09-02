import { Hono } from 'jsr:@hono/hono'

// change this to your function name
const app = new Hono().basePath("/api")

app.get('/posts', (c, req) => {
  return c.json({ message: "Hello World" })
});


Deno.serve(app.fetch)