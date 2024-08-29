const environmentService = require("../services/environmentService");

const environmentController = {
  getAllEnvironments: async (req, res, next) => {
    try {
      const environments = await environmentService.getAllEnvironments();
      res.status(200).json(environments);
    } catch (error) {
      next(error);
    }
  },

  getEnvironment: async (req, res, next) => {
    try {
      const environment = await environmentService.getEnvironmentById(
        req.params.id
      );
      res.status(200).json(environment);
    } catch (error) {
      next(error);
    }
  },

  createEnvironment: async (req, res, next) => {
    try {
      const environment = await environmentService.createEnvironment(req.body);
      res.status(201).json(environment);
    } catch (error) {
      next(error);
    }
  },

  updateEnvironment: async (req, res, next) => {
    try {
      const environment = await environmentService.updateEnvironment(
        req.params.id,
        req.body
      );
      res.status(200).json(environment);
    } catch (error) {
      next(error);
    }
  },

  deleteEnvironment: async (req, res, next) => {
    try {
      await environmentService.deleteEnvironment(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  deployEnvironment: async (req, res, next) => {
    try {
      const deployment = await environmentService.deployEnvironment(
        req.params.id
      );
      res.status(200).json(deployment);
    } catch (error) {
      next(error);
    }
  },

  getEnvironmentLogs: async (req, res, next) => {
    try {
      const logs = await environmentService.getEnvironmentLogs(req.params.id);
      res.status(200).json(logs);
    } catch (error) {
      next(error);
    }
  },

  resetEnvironment: async (req, res, next) => {
    try {
      await environmentService.resetEnvironment(req.params.id);
      res.status(200).json({ message: "Environment reset successfully" });
    } catch (error) {
      next(error);
    }
  },

  switchEnvironment: async (req, res, next) => {
    try {
      await environmentService.switchEnvironment(req.body.environmentId);
      res.status(200).json({ message: "Environment switched successfully" });
    } catch (error) {
      next(error);
    }
  },

  getEnvironmentVariables: async (req, res, next) => {
    try {
      const variables = await environmentService.getEnvironmentVariables(
        req.params.id
      );
      res.status(200).json(variables);
    } catch (error) {
      next(error);
    }
  },

  createEnvironmentVariable: async (req, res, next) => {
    try {
      const variable = await environmentService.createEnvironmentVariable(
        req.params.id,
        req.body
      );
      res.status(201).json(variable);
    } catch (error) {
      next(error);
    }
  },

  deleteEnvironmentVariable: async (req, res, next) => {
    try {
      await environmentService.deleteEnvironmentVariable(
        req.params.id,
        req.body.key
      );
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  backupEnvironment: async (req, res, next) => {
    try {
      const backup = await environmentService.backupEnvironment(req.params.id);
      res.status(200).json(backup);
    } catch (error) {
      next(error);
    }
  },

  restoreEnvironment: async (req, res, next) => {
    try {
      const restore = await environmentService.restoreEnvironment(
        req.params.id,
        req.body.backupId
      );
      res.status(200).json(restore);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = environmentController;
