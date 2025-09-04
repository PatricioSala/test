import { Hono } from 'jsr:@hono/hono';
import { postsController } from '../controllers/postsController.ts';

const router = new Hono();

router.post('/', postsController.create);

router.get('/', postsController.getAll);

router.get("/:id", postsController.getById);

export default router;