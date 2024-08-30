const express = require("express");
const versionControlController = require("../Controllers/version-control");

const router = express.Router();

// Version Management
router.get("/", versionControlController.getAllVersions);
router.get("/:id", versionControlController.getVersion);
router.post("/", versionControlController.createVersion);
router.put("/:id", versionControlController.updateVersion);
router.delete("/:id", versionControlController.deleteVersion);

// Schema Management for a Version
router.get("/:id/schemas", versionControlController.getVersionSchemas);
router.post("/:id/migrate", versionControlController.migrateSchema);

// Version Rollback
router.post("/:id/rollback", versionControlController.rollbackVersion);

// Changelog Management
router.get("/:id/changelog", versionControlController.getChangelog);

// Migration Management
router.get("/migrations", versionControlController.getAllMigrations);
router.get("/migrations/:id", versionControlController.getMigration);
router.post("/migrations", versionControlController.createMigration);
router.post("/migrations/:id/apply", versionControlController.applyMigration);
router.post("/migrations/:id/revert", versionControlController.revertMigration);
router.post(
  "/migrations/:id/rollback",
  versionControlController.rollbackMigration
);

// Migration Logs
router.get("/migrations/:id/log", versionControlController.getMigrationLog);

module.exports = router;
