import { Hono } from 'jsr:@hono/hono';
import usersController from '../controllers/usersController.ts';

const router = new Hono();

router.get('/', usersController.getAll);

router.get("/:id", usersController.getById);

router.post('/', usersController.create);

export default router;