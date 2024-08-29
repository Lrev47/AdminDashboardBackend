const express = require("express");
const alertsController = require("../Controllers/alerts");

const router = express.Router();

// Define routes and map them to controller methods
router.get("/", alertsController.getAllAlerts);
router.get("/:id", alertsController.getAlert);
router.post("/", alertsController.createAlert);
router.put("/:id", alertsController.updateAlert);
router.delete("/:id", alertsController.deleteAlert);
router.post("/:id/resolve", alertsController.resolveAlert);
router.get("/active", alertsController.getActiveAlerts);
router.post("/bulk-resolve", alertsController.bulkResolveAlerts);

module.exports = router;
