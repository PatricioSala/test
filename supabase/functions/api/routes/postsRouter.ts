import { Hono } from 'jsr:@hono/hono';
import { postsController } from '../controllers/postsController.ts';

const router = new Hono();

router.get('/', postsController.getAll);

router.get("/:id", postsController.getById);

router.post('/', postsController.create);

export default router;