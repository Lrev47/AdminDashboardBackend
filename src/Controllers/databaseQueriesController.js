const databaseService = require("../services/databaseService");

const databaseController = {
  executeQuery: async (req, res, next) => {
    try {
      const result = await databaseService.executeQuery(req.body.query);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  executeBatchQuery: async (req, res, next) => {
    try {
      const result = await databaseService.executeBatchQuery(req.body.queries);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  getAllTables: async (req, res, next) => {
    try {
      const tables = await databaseService.getAllTables();
      res.status(200).json(tables);
    } catch (error) {
      next(error);
    }
  },

  getTableData: async (req, res, next) => {
    try {
      const data = await databaseService.getTableData(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  insertTableData: async (req, res, next) => {
    try {
      const data = await databaseService.insertTableData(
        req.params.id,
        req.body.data
      );
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  updateTableData: async (req, res, next) => {
    try {
      const data = await databaseService.updateTableData(
        req.params.id,
        req.body.data
      );
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  deleteTableData: async (req, res, next) => {
    try {
      await databaseService.deleteTableData(req.params.id, req.body.dataId);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  importData: async (req, res, next) => {
    try {
      const result = await databaseService.importData(req.body.file);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },

  getAllBackups: async (req, res, next) => {
    try {
      const backups = await databaseService.getAllBackups();
      res.status(200).json(backups);
    } catch (error) {
      next(error);
    }
  },

  createBackup: async (req, res, next) => {
    try {
      const backup = await databaseService.createBackup();
      res.status(201).json(backup);
    } catch (error) {
      next(error);
    }
  },

  restoreBackup: async (req, res, next) => {
    try {
      await databaseService.restoreBackup(req.body.backupId);
      res.status(200).json({ message: "Backup restored successfully" });
    } catch (error) {
      next(error);
    }
  },

  getLogs: async (req, res, next) => {
    try {
      const logs = await databaseService.getLogs();
      res.status(200).json(logs);
    } catch (error) {
      next(error);
    }
  },

  createTransaction: async (req, res, next) => {
    try {
      const transaction = await databaseService.createTransaction(
        req.body.operations
      );
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  },

  getSchema: async (req, res, next) => {
    try {
      const schema = await databaseService.getSchema();
      res.status(200).json(schema);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = databaseController;
