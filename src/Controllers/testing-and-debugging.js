const testingService = require("../services/testingService");
const debuggingService = require("../services/debuggingService");

const testingAndDebuggingController = {
  // Testing endpoints
  runTest: async (req, res, next) => {
    try {
      const result = await testingService.runTest(req.body.testId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  runTestSuite: async (req, res, next) => {
    try {
      const result = await testingService.runTestSuite(req.body.suiteId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  getTestResults: async (req, res, next) => {
    try {
      const results = await testingService.getTestResults();
      res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  },

  generateMockResponses: async (req, res, next) => {
    try {
      const mockResponses = await testingService.generateMockResponses(
        req.body
      );
      res.status(200).json(mockResponses);
    } catch (error) {
      next(error);
    }
  },

  getTestCoverage: async (req, res, next) => {
    try {
      const coverage = await testingService.getTestCoverage();
      res.status(200).json(coverage);
    } catch (error) {
      next(error);
    }
  },

  scheduleTests: async (req, res, next) => {
    try {
      await testingService.scheduleTests(req.body.schedule);
      res.status(200).json({ message: "Tests scheduled successfully" });
    } catch (error) {
      next(error);
    }
  },

  getTestReports: async (req, res, next) => {
    try {
      const reports = await testingService.getTestReports();
      res.status(200).json(reports);
    } catch (error) {
      next(error);
    }
  },

  // Debugging endpoints
  logDebuggingInfo: async (req, res, next) => {
    try {
      await debuggingService.logDebuggingInfo(req.body);
      res.status(201).json({ message: "Log created successfully" });
    } catch (error) {
      next(error);
    }
  },

  submitErrorReport: async (req, res, next) => {
    try {
      await debuggingService.submitErrorReport(req.body);
      res.status(201).json({ message: "Error report submitted successfully" });
    } catch (error) {
      next(error);
    }
  },

  takeSnapshot: async (req, res, next) => {
    try {
      const snapshot = await debuggingService.takeSnapshot();
      res.status(201).json(snapshot);
    } catch (error) {
      next(error);
    }
  },

  getSnapshots: async (req, res, next) => {
    try {
      const snapshots = await debuggingService.getSnapshots();
      res.status(200).json(snapshots);
    } catch (error) {
      next(error);
    }
  },

  toggleLogging: async (req, res, next) => {
    try {
      await debuggingService.toggleLogging(req.body.enable);
      res.status(200).json({
        message: `Logging ${
          req.body.enable ? "enabled" : "disabled"
        } successfully`,
      });
    } catch (error) {
      next(error);
    }
  },

  getDebuggingEnvironment: async (req, res, next) => {
    try {
      const environment = await debuggingService.getDebuggingEnvironment();
      res.status(200).json(environment);
    } catch (error) {
      next(error);
    }
  },

  clearCache: async (req, res, next) => {
    try {
      await debuggingService.clearCache();
      res.status(200).json({ message: "Cache cleared successfully" });
    } catch (error) {
      next(error);
    }
  },

  simulateError: async (req, res, next) => {
    try {
      await debuggingService.simulateError(req.body.errorType);
      res.status(200).json({ message: "Error simulated successfully" });
    } catch (error) {
      next(error);
    }
  },

  getMemoryUsage: async (req, res, next) => {
    try {
      const memoryUsage = await debuggingService.getMemoryUsage();
      res.status(200).json(memoryUsage);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = testingAndDebuggingController;
