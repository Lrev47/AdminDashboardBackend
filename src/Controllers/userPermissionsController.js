const permissionsService = require("../services/permissionsService");

const permissionsController = {
  getAllRoles: async (req, res, next) => {
    try {
      const roles = await permissionsService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  },

  createRole: async (req, res, next) => {
    try {
      const role = await permissionsService.createRole(req.body);
      res.status(201).json(role);
    } catch (error) {
      next(error);
    }
  },

  getRole: async (req, res, next) => {
    try {
      const role = await permissionsService.getRoleById(req.params.id);
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  },

  updateRole: async (req, res, next) => {
    try {
      const role = await permissionsService.updateRole(req.params.id, req.body);
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  },

  deleteRole: async (req, res, next) => {
    try {
      await permissionsService.deleteRole(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getUsersByRole: async (req, res, next) => {
    try {
      const users = await permissionsService.getUsersByRole(req.params.roleId);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  assignRoleToUser: async (req, res, next) => {
    try {
      await permissionsService.assignRoleToUser(
        req.body.userId,
        req.body.roleId
      );
      res.status(200).json({ message: "Role assigned successfully" });
    } catch (error) {
      next(error);
    }
  },

  revokeRoleFromUser: async (req, res, next) => {
    try {
      await permissionsService.revokeRoleFromUser(
        req.body.userId,
        req.body.roleId
      );
      res.status(200).json({ message: "Role revoked successfully" });
    } catch (error) {
      next(error);
    }
  },

  getUserRoles: async (req, res, next) => {
    try {
      const roles = await permissionsService.getUserRoles(req.params.userId);
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  },

  getAllCapabilities: async (req, res, next) => {
    try {
      const capabilities = await permissionsService.getAllCapabilities();
      res.status(200).json(capabilities);
    } catch (error) {
      next(error);
    }
  },

  assignCapabilityToRole: async (req, res, next) => {
    try {
      await permissionsService.assignCapabilityToRole(
        req.body.roleId,
        req.body.capability
      );
      res.status(200).json({ message: "Capability assigned successfully" });
    } catch (error) {
      next(error);
    }
  },

  revokeCapabilityFromRole: async (req, res, next) => {
    try {
      await permissionsService.revokeCapabilityFromRole(
        req.body.roleId,
        req.body.capability
      );
      res.status(200).json({ message: "Capability revoked successfully" });
    } catch (error) {
      next(error);
    }
  },

  getAuditLog: async (req, res, next) => {
    try {
      const auditLog = await permissionsService.getAuditLog();
      res.status(200).json(auditLog);
    } catch (error) {
      next(error);
    }
  },

  getAllPermissionRequests: async (req, res, next) => {
    try {
      const requests = await permissionsService.getAllPermissionRequests();
      res.status(200).json(requests);
    } catch (error) {
      next(error);
    }
  },

  approvePermissionRequest: async (req, res, next) => {
    try {
      await permissionsService.approvePermissionRequest(req.params.requestId);
      res.status(200).json({ message: "Request approved successfully" });
    } catch (error) {
      next(error);
    }
  },

  denyPermissionRequest: async (req, res, next) => {
    try {
      await permissionsService.denyPermissionRequest(req.params.requestId);
      res.status(200).json({ message: "Request denied successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = permissionsController;
