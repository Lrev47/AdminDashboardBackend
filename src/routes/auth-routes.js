const express = require("express");
const {
  protect,
  restrictTo,
  logRequest,
} = require("../middleware/authMiddleware");
const authController = require("../Controllers/auth");

const router = express.Router();

router.use(logRequest);
// Define routes and map them to controller methods
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", protect, authController.logout); // Only authenticated users can log out
router.post("/refresh-token", authController.refreshToken);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.get("/verify-email", authController.verifyEmail);
router.get("/me", protect, authController.me); // Protected route to get user profile

router.post("/change-password", protect, authController.changePassword); // Protect change password route
router.get("/roles", protect, restrictTo(["admin"]), authController.getRoles); // Only admins can get roles
router.post(
  "/assign-role",
  protect,
  restrictTo(["admin"]),
  authController.assignRole
); // Only admins can assign roles
router.post(
  "/revoke-role",
  protect,
  restrictTo(["admin"]),
  authController.revokeRole
); // Only admins can revoke roles
router.post("/verify-token", authController.verifyToken);

module.exports = router;
