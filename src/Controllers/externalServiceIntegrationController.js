const externalService = require("../services/externalService");

const externalServiceController = {
  getAllExternalServices: async (req, res, next) => {
    try {
      const services = await externalService.getAllExternalServices();
      res.status(200).json(services);
    } catch (error) {
      next(error);
    }
  },

  getExternalService: async (req, res, next) => {
    try {
      const service = await externalService.getExternalServiceById(
        req.params.id
      );
      res.status(200).json(service);
    } catch (error) {
      next(error);
    }
  },

  createExternalService: async (req, res, next) => {
    try {
      const service = await externalService.createExternalService(req.body);
      res.status(201).json(service);
    } catch (error) {
      next(error);
    }
  },

  updateExternalService: async (req, res, next) => {
    try {
      const service = await externalService.updateExternalService(
        req.params.id,
        req.body
      );
      res.status(200).json(service);
    } catch (error) {
      next(error);
    }
  },

  deleteExternalService: async (req, res, next) => {
    try {
      await externalService.deleteExternalService(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  testExternalService: async (req, res, next) => {
    try {
      const result = await externalService.testExternalService(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  executeExternalService: async (req, res, next) => {
    try {
      const result = await externalService.executeExternalService(
        req.params.id
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  getExternalServiceLogs: async (req, res, next) => {
    try {
      const logs = await externalService.getExternalServiceLogs(req.params.id);
      res.status(200).json(logs);
    } catch (error) {
      next(error);
    }
  },

  createWebhook: async (req, res, next) => {
    try {
      const webhook = await externalService.createWebhook(req.body);
      res.status(201).json(webhook);
    } catch (error) {
      next(error);
    }
  },

  deleteWebhook: async (req, res, next) => {
    try {
      await externalService.deleteWebhook(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getServiceUsage: async (req, res, next) => {
    try {
      const usage = await externalService.getServiceUsage(req.params.id);
      res.status(200).json(usage);
    } catch (error) {
      next(error);
    }
  },

  syncExternalService: async (req, res, next) => {
    try {
      await externalService.syncExternalService(req.params.id);
      res.status(200).json({ message: "Service synchronized successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = externalServiceController;
