const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authService = {
  hashPassword: (password) => bcrypt.hash(password, 10),
  verifyPassword: (password, hashedPassword) =>
    bcrypt.compare(password, hashedPassword),
  generateToken: (userId, role) =>
    jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: "1d" }),
};

module.exports = authService;
