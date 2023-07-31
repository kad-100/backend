// controllers/userController.js
const users = []; 
const User = require("../models/userModel");

const createUser = (req, res) => {
    const { name, email, password } = req.body;

    // Check if required fields are provided
   
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide name, email, and password" });
    }
  
    // Check if the email is already registered
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }
  
    // Perform the user registration or database insertion
    // Replace this with your actual implementation
    // For example, adding the user data to an array (Replace with database if needed)
    
  console.log("Reached before registration");
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    console.log("Reached after registration");
  
    // Send the success response with the new user data
    return res.status(201).json({ message: "User registered successfully", user: newUser });
};


function registerUser(req, res) {
 
    const user = {
      id: 1,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    res.status(200).json({
      message: 'User registered successfully',
      user: user,
    });
  }
  
  module.exports = {
    registerUser,
  };
  
  
  
  // Sample implementation of user login
  const loginUser = (req, res, next) => {
    // Implementation to authenticate user credentials
    // Replace this with your actual implementation
    const user = findUserByEmailAndPassword(req.body.email, req.body.password);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    // If user is authenticated, set the user object in the request for future reference
    req.user = user;
    next();
  };
  
  module.exports = {
  
    loginUser,
  };
  

const getAllUsers = (req, res) => {
  const users = User.getAllUsers();
  res.json({ users });
};

module.exports = { createUser, getAllUsers };
