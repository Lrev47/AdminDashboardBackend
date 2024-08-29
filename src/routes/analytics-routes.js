const express = require("express");
const analyticsController = require("../Controllers/analytics");

const router = express.Router();

// Define routes and map them to controller methods
router.get("/summary", analyticsController.getSummary);
router.post("/reports/custom", analyticsController.createCustomReport);
router.get("/datasets", analyticsController.getAllDatasets);
router.get("/datasets/:id", analyticsController.getDataset);
router.post("/datasets", analyticsController.createDataset);
router.put("/datasets/:id", analyticsController.updateDataset);
router.delete("/datasets/:id", analyticsController.deleteDataset);
router.get("/metrics", analyticsController.getAllMetrics);
router.post("/aggregate", analyticsController.aggregateData);
router.post("/visualize", analyticsController.visualizeData);
router.get("/reports", analyticsController.getAllReports);
router.get("/reports/:id", analyticsController.getReport);
router.post("/reports", analyticsController.createReport);
router.delete("/reports/:id", analyticsController.deleteReport);
router.get("/reports/:id/export", analyticsController.exportReport);
router.get("/tags", analyticsController.getAllTags);

module.exports = router;
