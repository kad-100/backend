// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
//const { generateToken } = require("../path/to/authUtils");

router.post("/create-user", userController.createUser);
router.get("/users", userController.getAllUsers);


//router.get("/", productController.getAllProducts);

module.exports = router;
