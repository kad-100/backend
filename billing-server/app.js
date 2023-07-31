const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());

// Mount the routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Billing Server");
});

// Catch-all route for handling 404 Not Found errors
app.get("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});
// Catch-all error handler
app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes
  
    // Send a specific error response
    res.status(500).json({ message: "Internal server error. Please try again later." });
  });
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
