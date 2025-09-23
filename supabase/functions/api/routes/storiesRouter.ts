import { Hono } from 'jsr:@hono/hono';
import storiesController from '../controllers/storiesController.ts';

const router = new Hono();

router.get('/', storiesController.getAll);

router.get("/:id", storiesController.getById);

router.post('/create', storiesController.create);

export default router;