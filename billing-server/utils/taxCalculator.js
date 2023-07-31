// utils/taxCalculator.js

const calculateProductTax = (price) => {
  if (price > 1000 && price <= 5000) {
    return price * 0.12;
  } else if (price > 5000) {
    return price * 0.18;
  } else {
    return 200; // Flat tax amount
  }
};

const calculateServiceTax = (price) => {
  if (price > 1000 && price <= 8000) {
    return price * 0.10;
  } else if (price > 8000) {
    return price * 0.15;
  } else {
    return 100; // Flat tax amount
  }
};

module.exports = { calculateProductTax, calculateServiceTax };
