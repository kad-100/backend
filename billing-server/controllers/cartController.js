// controllers/cartController.js

const User = require("../models/userModel");
const Product = require("../models/productModel");
const Service = require("../models/serviceModel");
const { calculateProductTax, calculateServiceTax } = require("../utils/taxCalculator");

// controllers/cartController.js

// Sample implementation of addToCart
const addToCart = (req, res) => {
    const { productId, quantity } = req.body;
  
    // Validate if productId and quantity are provided
    if (!productId || !quantity) {
      return res.status(400).json({ error: "ProductId and quantity are required." });
    }
  
    // Assuming you have user authentication implemented and the user information is available
    const { userId } = req.user; // Assuming user ID is available in req.user (change this based on your authentication method)
  
    // Add the product to the cart for the specified user (you may need to interact with the database here)
    // Replace this with your actual implementation
  
    res.status(200).json({ message: "Product added to the cart successfully." });
  };
  
  module.exports = {
    addToCart,
  };
  

const removeFromCart = (req, res) => {
  const { userId, itemId } = req.body;
  const user = User.getUserById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const itemIndex = user.cart.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found in cart." });
  }

  user.cart.splice(itemIndex, 1);
  res.status(200).json({ message: "Item removed from cart successfully.", cart: user.cart });
};

const clearCart = (req, res) => {
  const { userId } = req.body;
  const user = User.getUserById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  user.cart = [];
  res.status(200).json({ message: "Cart cleared successfully.", cart: user.cart });
};

module.exports = { addToCart, removeFromCart, clearCart };
