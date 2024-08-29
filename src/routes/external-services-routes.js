const express = require("express");
const externalServiceController = require("../Controllers/external-services");

const router = express.Router();

// Define routes and map them to controller methods
router.get("/", externalServiceController.getAllExternalServices);
router.get("/:id", externalServiceController.getExternalService);
router.post("/", externalServiceController.createExternalService);
router.put("/:id", externalServiceController.updateExternalService);
router.delete("/:id", externalServiceController.deleteExternalService);

router.post("/:id/test", externalServiceController.testExternalService);
router.post("/:id/execute", externalServiceController.executeExternalService);

router.get("/:id/logs", externalServiceController.getExternalServiceLogs);

router.post("/webhook", externalServiceController.createWebhook);
router.delete("/webhook/:id", externalServiceController.deleteWebhook);

router.get("/:id/usage", externalServiceController.getServiceUsage);

router.post("/:id/sync", externalServiceController.syncExternalService);

module.exports = router;
