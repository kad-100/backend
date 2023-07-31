// middleware/authMiddleware.js

const { verifyToken } = require("../path/to/authUtils");

function authenticateUser(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authentication required." });
  }

  try {
    const decodedToken = verifyToken(token.replace("Bearer ", ""));
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
}

module.exports = authenticateUser;
