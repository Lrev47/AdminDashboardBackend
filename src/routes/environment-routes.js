const express = require("express");
const environmentController = require("../Controllers/environment");

const router = express.Router();

// Define routes and map them to controller methods
router.get("/", environmentController.getAllEnvironments);
router.get("/:id", environmentController.getEnvironment);
router.post("/", environmentController.createEnvironment);
router.put("/:id", environmentController.updateEnvironment);
router.delete("/:id", environmentController.deleteEnvironment);

router.post("/:id/deploy", environmentController.deployEnvironment);
router.get("/:id/logs", environmentController.getEnvironmentLogs);
router.post("/:id/reset", environmentController.resetEnvironment);

router.post("/switch", environmentController.switchEnvironment);

router.get("/:id/variables", environmentController.getEnvironmentVariables);
router.post("/:id/variables", environmentController.createEnvironmentVariable);
router.delete(
  "/:id/variables",
  environmentController.deleteEnvironmentVariable
);

router.post("/:id/backup", environmentController.backupEnvironment);
router.post("/:id/restore", environmentController.restoreEnvironment);

module.exports = router;
