const express = require("express");
const settingsController = require("../Controllers/settings");

const router = express.Router();

// Settings Management
router.get("/", settingsController.getAllSettings);
router.get("/:id", settingsController.getSetting);
router.post("/", settingsController.createSetting);
router.put("/:id", settingsController.updateSetting);
router.delete("/:id", settingsController.deleteSetting);

// Categories Management
router.get("/categories", settingsController.getCategories);
router.put("/categories/:id", settingsController.updateCategory);

// Preferences Management
router.get("/preferences", settingsController.getPreferences);
router.put("/preferences", settingsController.updatePreferences);

// Notification Settings
router.get("/notifications", settingsController.getNotificationSettings);
router.put("/notifications", settingsController.updateNotificationSettings);

// Reset Settings
router.post("/reset", settingsController.resetSettings);

module.exports = router;
