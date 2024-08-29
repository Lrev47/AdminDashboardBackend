const express = require("express");
const notificationsController = require("../Controllers/notifications");

const router = express.Router();

// Notifications Management
router.get("/", notificationsController.getAllNotifications);
router.get("/:id", notificationsController.getNotification);
router.post("/", notificationsController.createNotification);
router.put("/:id", notificationsController.updateNotification);
router.delete("/:id", notificationsController.deleteNotification);

// Mark as Read/Unread
router.post("/:id/read", notificationsController.markAsRead);
router.post("/:id/unread", notificationsController.markAsUnread);

// Notification Types
router.get("/types", notificationsController.getNotificationTypes);

module.exports = router;
