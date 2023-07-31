// models/productModel.js

let products = [
    { id: 1, name: "Product A", price: 1200 },
    { id: 2, name: "Product B", price: 5500 },
    { id: 3, name: "Product C", price: 800 },
    // Add more products as needed
  ];
  
  class Product {
    static getAllProducts() {
      return products;
    }
  
    static getProductById(id) {
      return products.find((product) => product.id === id);
    }
  }
  
  module.exports = Product;
  