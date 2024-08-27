const express = require("express");
const adminController = require("../controllers/adminController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", protect, restrictTo("Admin"), adminController.getAllUsers);
router.delete(
  "/users/:id",
  protect,
  restrictTo("Admin"),
  adminController.deleteUser
);

module.exports = router;
