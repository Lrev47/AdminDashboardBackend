const express = require("express");
const databaseController = require("../Controllers/db-queries");

const router = express.Router();

// Define routes and map them to controller methods
router.post("/query", databaseController.executeQuery);
router.post("/batch-query", databaseController.executeBatchQuery);

router.get("/tables", databaseController.getAllTables);
router.get("/tables/:id", databaseController.getTableData);
router.post("/tables/:id", databaseController.insertTableData);
router.put("/tables/:id", databaseController.updateTableData);
router.delete("/tables/:id", databaseController.deleteTableData);

router.post("/import", databaseController.importData);

router.get("/backups", databaseController.getAllBackups);
router.post("/backups", databaseController.createBackup);
router.post("/backups/restore", databaseController.restoreBackup);

router.get("/logs", databaseController.getLogs);

router.post("/transaction", databaseController.createTransaction);

router.get("/schema", databaseController.getSchema);

module.exports = router;
