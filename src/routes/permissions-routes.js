const express = require("express");
const permissionsController = require("../Controllers/permissions");

const router = express.Router();

// Role Management
router.get("/roles", permissionsController.getAllRoles);
router.post("/roles", permissionsController.createRole);
router.get("/roles/:id", permissionsController.getRole);
router.put("/roles/:id", permissionsController.updateRole);
router.delete("/roles/:id", permissionsController.deleteRole);

// User Role Management
router.get("/roles/:roleId/users", permissionsController.getUsersByRole);
router.post("/roles/assign", permissionsController.assignRoleToUser);
router.post("/roles/revoke", permissionsController.revokeRoleFromUser);
router.get("/users/:userId/roles", permissionsController.getUserRoles);

// Capability Management
router.get("/capabilities", permissionsController.getAllCapabilities);
router.post(
  "/capabilities/assign",
  permissionsController.assignCapabilityToRole
);
router.post(
  "/capabilities/revoke",
  permissionsController.revokeCapabilityFromRole
);

// Audit Log
router.get("/audit-log", permissionsController.getAuditLog);

// Permission Requests
router.get("/requests", permissionsController.getAllPermissionRequests);
router.post(
  "/requests/:requestId/approve",
  permissionsController.approvePermissionRequest
);
router.post(
  "/requests/:requestId/deny",
  permissionsController.denyPermissionRequest
);

module.exports = router;
