// routes/cartRoutes.js

const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
//const authenticateUser = require("../path/to/authMiddleware");

router.post("/add-to-cart", cartController.addToCart);
router.post("/remove-from-cart", cartController.removeFromCart);
router.post("/clear-cart", cartController.clearCart);
//router.post("/add", authenticateUser, cartController.addToCart);

module.exports = router;
