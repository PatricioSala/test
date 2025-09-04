import { Hono } from 'jsr:@hono/hono';
import authController from '../controllers/authController.ts';

const router = new Hono();

router.get('/sign-in', authController.signIn);

router.post('/sign-up', authController.signUp);

export default router;