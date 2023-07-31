// controllers/orderController.js

const User = require("../models/userModel");

const viewTotalBill = (req, res) => {
  const { userId } = req.body;
  const user = User.getUserById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  let totalBill = 0;
  user.cart.forEach((item) => {
    totalBill += item.price + item.tax;
  });

  res.status(200).json({ totalBill });
};

const confirmOrder = (req, res) => {
  const { userId } = req.body;
  const user = User.getUserById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  // Process the order and perform any necessary actions
  // For this example, we'll simply clear the cart
  user.cart = [];
  res.status(200).json({ message: "Order confirmed successfully.", cart: user.cart });
};

module.exports = { viewTotalBill, confirmOrder };
