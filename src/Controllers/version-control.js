const versionControlService = require("../services/versionControlService");

const versionControlController = {
  getAllVersions: async (req, res, next) => {
    try {
      const versions = await versionControlService.getAllVersions();
      res.status(200).json(versions);
    } catch (error) {
      next(error);
    }
  },

  getVersion: async (req, res, next) => {
    try {
      const version = await versionControlService.getVersionById(req.params.id);
      res.status(200).json(version);
    } catch (error) {
      next(error);
    }
  },

  createVersion: async (req, res, next) => {
    try {
      const version = await versionControlService.createVersion(req.body);
      res.status(201).json(version);
    } catch (error) {
      next(error);
    }
  },

  updateVersion: async (req, res, next) => {
    try {
      const version = await versionControlService.updateVersion(
        req.params.id,
        req.body
      );
      res.status(200).json(version);
    } catch (error) {
      next(error);
    }
  },

  deleteVersion: async (req, res, next) => {
    try {
      await versionControlService.deleteVersion(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getVersionSchemas: async (req, res, next) => {
    try {
      const schemas = await versionControlService.getVersionSchemas(
        req.params.id
      );
      res.status(200).json(schemas);
    } catch (error) {
      next(error);
    }
  },

  migrateSchema: async (req, res, next) => {
    try {
      await versionControlService.migrateSchema(
        req.params.id,
        req.body.schemaId
      );
      res.status(200).json({ message: "Schema migrated successfully" });
    } catch (error) {
      next(error);
    }
  },

  rollbackVersion: async (req, res, next) => {
    try {
      await versionControlService.rollbackVersion(req.params.id);
      res.status(200).json({ message: "Version rolled back successfully" });
    } catch (error) {
      next(error);
    }
  },

  getChangelog: async (req, res, next) => {
    try {
      const changelog = await versionControlService.getChangelog(req.params.id);
      res.status(200).json(changelog);
    } catch (error) {
      next(error);
    }
  },

  getAllMigrations: async (req, res, next) => {
    try {
      const migrations = await versionControlService.getAllMigrations();
      res.status(200).json(migrations);
    } catch (error) {
      next(error);
    }
  },

  createMigration: async (req, res, next) => {
    try {
      const migration = await versionControlService.createMigration(req.body);
      res.status(201).json(migration);
    } catch (error) {
      next(error);
    }
  },

  getMigration: async (req, res, next) => {
    try {
      const migration = await versionControlService.getMigrationById(
        req.params.id
      );
      res.status(200).json(migration);
    } catch (error) {
      next(error);
    }
  },

  applyMigration: async (req, res, next) => {
    try {
      await versionControlService.applyMigration(req.params.id);
      res.status(200).json({ message: "Migration applied successfully" });
    } catch (error) {
      next(error);
    }
  },

  revertMigration: async (req, res, next) => {
    try {
      await versionControlService.revertMigration(req.params.id);
      res.status(200).json({ message: "Migration reverted successfully" });
    } catch (error) {
      next(error);
    }
  },

  rollbackMigration: async (req, res, next) => {
    try {
      await versionControlService.rollbackMigration(req.params.id);
      res.status(200).json({ message: "Migration rolled back successfully" });
    } catch (error) {
      next(error);
    }
  },

  getMigrationLog: async (req, res, next) => {
    try {
      const log = await versionControlService.getMigrationLog(req.params.id);
      res.status(200).json(log);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = versionControlController;
