import express from 'express';
import {
  addToCart,
  getCartProducts,
  removeAllFromCart,
  updateQuantity,
} from '../controllers/cart.controller';
import { protectRoute } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/', protectRoute, getCartProducts);
router.post('/', protectRoute, addToCart);
router.delete('/:id', protectRoute, removeAllFromCart);
router.put('/:id', protectRoute, updateQuantity);

export default router;
