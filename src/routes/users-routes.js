const express = require("express");
const userController = require("../Controllers/users");

const router = express.Router();

// User Management
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/:id", userController.patchUser);

// User Status and Self-Management
router.get("/:id/status", userController.getUserStatus);
router.get("/me", userController.getMe);
router.put("/me", userController.updateMe);

// User Search and Bulk Operations
router.post("/search", userController.searchUsers);
router.post("/bulk-create", userController.bulkCreateUsers);

// Role Management for Users
router.post("/assign-role", userController.assignRoleToUser);
router.post("/revoke-role", userController.revokeRoleFromUser);
router.get("/:id/roles", userController.getUserRoles);

// User Activity and Notifications
router.get("/:id/activity", userController.getUserActivity);
router.post("/notification", userController.createUserNotification);
router.get("/:id/notifications", userController.getUserNotifications);

module.exports = router;
