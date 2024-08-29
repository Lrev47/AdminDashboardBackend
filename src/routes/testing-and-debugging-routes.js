const express = require("express");
const testingAndDebuggingController = require("../Controllers/testing-and-debugging");

const router = express.Router();

// Testing Endpoints
router.post("/test", testingAndDebuggingController.runTest);
router.post("/test-suite", testingAndDebuggingController.runTestSuite);
router.get("/test-results", testingAndDebuggingController.getTestResults);
router.post(
  "/mock-responses",
  testingAndDebuggingController.generateMockResponses
);
router.get("/test-coverage", testingAndDebuggingController.getTestCoverage);
router.post("/schedule-tests", testingAndDebuggingController.scheduleTests);
router.get("/test-reports", testingAndDebuggingController.getTestReports);

// Debugging Endpoints
router.post("/log", testingAndDebuggingController.logDebuggingInfo);
router.post("/error-report", testingAndDebuggingController.submitErrorReport);
router.post("/snapshot", testingAndDebuggingController.takeSnapshot);
router.get("/snapshots", testingAndDebuggingController.getSnapshots);
router.post("/toggle-logging", testingAndDebuggingController.toggleLogging);
router.get(
  "/environment",
  testingAndDebuggingController.getDebuggingEnvironment
);
router.post("/clear-cache", testingAndDebuggingController.clearCache);
router.post("/simulate-error", testingAndDebuggingController.simulateError);
router.get("/memory-usage", testingAndDebuggingController.getMemoryUsage);

module.exports = router;
