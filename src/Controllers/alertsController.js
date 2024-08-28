const alertsService = require("../services/alertsService");

const alertsController = {
  getAllAlerts: async (req, res, next) => {
    try {
      const alerts = await alertsService.getAllAlerts();
      res.status(200).json(alerts);
    } catch (error) {
      next(error);
    }
  },

  getAlert: async (req, res, next) => {
    try {
      const alert = await alertsService.getAlertById(req.params.id);
      res.status(200).json(alert);
    } catch (error) {
      next(error);
    }
  },

  createAlert: async (req, res, next) => {
    try {
      const alert = await alertsService.createAlert(req.body);
      res.status(201).json(alert);
    } catch (error) {
      next(error);
    }
  },

  updateAlert: async (req, res, next) => {
    try {
      const alert = await alertsService.updateAlert(req.params.id, req.body);
      res.status(200).json(alert);
    } catch (error) {
      next(error);
    }
  },

  deleteAlert: async (req, res, next) => {
    try {
      await alertsService.deleteAlert(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  resolveAlert: async (req, res, next) => {
    try {
      await alertsService.resolveAlert(req.params.id);
      res.status(200).json({ message: "Alert resolved" });
    } catch (error) {
      next(error);
    }
  },

  getActiveAlerts: async (req, res, next) => {
    try {
      const activeAlerts = await alertsService.getActiveAlerts();
      res.status(200).json(activeAlerts);
    } catch (error) {
      next(error);
    }
  },

  bulkResolveAlerts: async (req, res, next) => {
    try {
      await alertsService.bulkResolveAlerts(req.body.alertIds);
      res.status(200).json({ message: "Alerts resolved in bulk" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = alertsController;
