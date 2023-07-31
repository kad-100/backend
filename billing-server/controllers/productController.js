const Product = require('../models/product');

// Function to add a product
const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    // Validate input data here, if necessary
    if (!name || !price) {
      return res.status(400).json({ message: "Product name and price are required." });
    }

    // Create a new product
    const newProduct = new Product({ name, price });
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ message: 'Internal server error. Please try again later.' });
  }
};

module.exports = {
  addProduct,
};
