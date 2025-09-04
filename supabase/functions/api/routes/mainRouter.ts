import { Hono } from 'jsr:@hono/hono';

const router = new Hono();

router.get('/', (c) => {
    return c.text("Welcome to Hono Generator!");
});

export default router;