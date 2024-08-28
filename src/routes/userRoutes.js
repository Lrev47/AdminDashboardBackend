const express = require("express");
const userController = require("../Controllers/userManagementController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", protect, userController.getProfile);
router.put("/profile", protect, userController.updateProfile);

module.exports = router;
