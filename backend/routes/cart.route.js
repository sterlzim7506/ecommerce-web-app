import express from "express";
import { addToCart, getCartProducts, removeAllFromCart, updateQuantity } from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protectRoute, addToCart);

router.get("/", protectRoute, getCartProducts);

router.delete("/", protectRoute, removeAllFromCart);

router.put("/:id", protectRoute, updateQuantity);

export default router;