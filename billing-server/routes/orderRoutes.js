// routes/orderRoutes.js

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/view-total-bill", orderController.viewTotalBill);
router.post("/confirm-order", orderController.confirmOrder);

module.exports = router;
