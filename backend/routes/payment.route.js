import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { createCheckoutSession } from '../controllers/payment.controller';

const router = express.Router();

router.post('/create-checkout-session', protectRoute, createCheckoutSession);

export default router;
