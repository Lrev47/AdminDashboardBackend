const express = require("express");
const mockDataController = require("../Controllers/mock-data");

const router = express.Router();

// Mock Data Routes
router.get("/", mockDataController.getAllMockData);
router.get("/:id", mockDataController.getMockData);
router.post("/", mockDataController.createMockData);
router.put("/:id", mockDataController.updateMockData);
router.delete("/:id", mockDataController.deleteMockData);

// Test and Schema Routes
router.post("/test", mockDataController.testMockData);
router.get("/schemas", mockDataController.getMockDataSchemas);
router.post("/generate", mockDataController.generateMockData);

// Clone Data Route
router.post("/:id/clone", mockDataController.cloneMockData);

module.exports = router;
