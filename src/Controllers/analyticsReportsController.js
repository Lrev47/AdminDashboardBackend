const analyticsService = require("../services/analyticsService");

const analyticsController = {
  getSummary: async (req, res, next) => {
    try {
      const summary = await analyticsService.getSummary();
      res.status(200).json(summary);
    } catch (error) {
      next(error);
    }
  },

  createCustomReport: async (req, res, next) => {
    try {
      const report = await analyticsService.createCustomReport(req.body);
      res.status(201).json(report);
    } catch (error) {
      next(error);
    }
  },

  getAllDatasets: async (req, res, next) => {
    try {
      const datasets = await analyticsService.getAllDatasets();
      res.status(200).json(datasets);
    } catch (error) {
      next(error);
    }
  },

  getDataset: async (req, res, next) => {
    try {
      const dataset = await analyticsService.getDatasetById(req.params.id);
      res.status(200).json(dataset);
    } catch (error) {
      next(error);
    }
  },

  createDataset: async (req, res, next) => {
    try {
      const dataset = await analyticsService.createDataset(req.body);
      res.status(201).json(dataset);
    } catch (error) {
      next(error);
    }
  },

  updateDataset: async (req, res, next) => {
    try {
      const dataset = await analyticsService.updateDataset(
        req.params.id,
        req.body
      );
      res.status(200).json(dataset);
    } catch (error) {
      next(error);
    }
  },

  deleteDataset: async (req, res, next) => {
    try {
      await analyticsService.deleteDataset(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getAllMetrics: async (req, res, next) => {
    try {
      const metrics = await analyticsService.getAllMetrics();
      res.status(200).json(metrics);
    } catch (error) {
      next(error);
    }
  },

  aggregateData: async (req, res, next) => {
    try {
      const aggregatedData = await analyticsService.aggregateData(req.body);
      res.status(200).json(aggregatedData);
    } catch (error) {
      next(error);
    }
  },

  visualizeData: async (req, res, next) => {
    try {
      const visualization = await analyticsService.visualizeData(req.body);
      res.status(200).json(visualization);
    } catch (error) {
      next(error);
    }
  },

  getAllReports: async (req, res, next) => {
    try {
      const reports = await analyticsService.getAllReports();
      res.status(200).json(reports);
    } catch (error) {
      next(error);
    }
  },

  getReport: async (req, res, next) => {
    try {
      const report = await analyticsService.getReportById(req.params.id);
      res.status(200).json(report);
    } catch (error) {
      next(error);
    }
  },

  createReport: async (req, res, next) => {
    try {
      const report = await analyticsService.createReport(req.body);
      res.status(201).json(report);
    } catch (error) {
      next(error);
    }
  },

  deleteReport: async (req, res, next) => {
    try {
      await analyticsService.deleteReport(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  exportReport: async (req, res, next) => {
    try {
      const exportedReport = await analyticsService.exportReport(req.params.id);
      res.status(200).json(exportedReport);
    } catch (error) {
      next(error);
    }
  },

  getAllTags: async (req, res, next) => {
    try {
      const tags = await analyticsService.getAllTags();
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = analyticsController;
