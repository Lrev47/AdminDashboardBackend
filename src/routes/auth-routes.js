const express = require("express");
const authController = require("../Controllers/auth");

const router = express.Router();

// Define routes and map them to controller methods
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh-token", authController.refreshToken);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.get("/verify-email", authController.verifyEmail);
router.get("/me", authController.me);
router.post("/change-password", authController.changePassword);
router.get("/roles", authController.getRoles);
router.post("/assign-role", authController.assignRole);
router.post("/revoke-role", authController.revokeRole);
router.post("/verify-token", authController.verifyToken);

module.exports = router;
