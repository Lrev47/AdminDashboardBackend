const express = require("express");
const userController = require("../Controllers/users");
const {
  protect,
  restrictTo,
  logRequest,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Apply the protect middleware and logging middleware to all routes below
router.use(protect);
router.use(logRequest);

// User Management
router.get("/", restrictTo("Admin"), userController.getAllUsers);
router.get("/:id", restrictTo("Admin", "User"), userController.getUser);
router.post("/", restrictTo("Admin"), userController.createUser);
router.put("/:id", restrictTo("Admin", "User"), userController.updateUser);
router.delete("/:id", restrictTo("Admin"), userController.deleteUser);
router.patch("/:id", restrictTo("Admin", "User"), userController.patchUser);

// User Status and Self-Management
router.get(
  "/:id/status",
  restrictTo("Admin", "User"),
  userController.getUserStatus
);
router.get("/me", userController.getMe);
router.put("/me", userController.updateMe);

// User Search and Bulk Operations
router.post("/search", restrictTo("Admin"), userController.searchUsers);
router.post(
  "/bulk-create",
  restrictTo("Admin"),
  userController.bulkCreateUsers
);

// Role Management for Users
router.post(
  "/assign-role",
  restrictTo("Admin"),
  userController.assignRoleToUser
);
router.post(
  "/revoke-role",
  restrictTo("Admin"),
  userController.revokeRoleFromUser
);
router.get("/:id/roles", restrictTo("Admin"), userController.getUserRoles);

// User Activity and Notifications
router.get(
  "/:id/activity",
  restrictTo("Admin"),
  userController.getUserActivity
);
router.post(
  "/notification",
  restrictTo("Admin", "User"),
  userController.createUserNotification
);
router.get(
  "/:id/notifications",
  restrictTo("Admin", "User"),
  userController.getUserNotifications
);

module.exports = router;
