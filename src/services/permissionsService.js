const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const permissionsService = {
  // Fetch all roles
  getAllRoles: async () => {
    return await db.role.findMany();
  },

  // Fetch a specific role by its ID
  getRoleById: async (id) => {
    return await db.role.findUnique({ where: { id } });
  },

  // Create a new role
  createRole: async (roleData) => {
    const newRole = await db.role.create({
      data: roleData,
    });
    return newRole;
  },

  // Update an existing role by its ID
  updateRole: async (id, updateData) => {
    const updatedRole = await db.role.update({
      where: { id },
      data: updateData,
    });
    return updatedRole;
  },

  // Delete a role by its ID
  deleteRole: async (id) => {
    await db.role.delete({ where: { id } });
  },

  // Fetch all users associated with a specific role
  getUsersByRole: async (roleId) => {
    return await db.user.findMany({
      where: {
        roles: {
          some: { id: roleId },
        },
      },
    });
  },

  // Assign a role to a user
  assignRoleToUser: async (userId, roleId) => {
    await db.user.update({
      where: { id: userId },
      data: {
        roles: {
          connect: { id: roleId },
        },
      },
    });
  },

  // Revoke a role from a user
  revokeRoleFromUser: async (userId, roleId) => {
    await db.user.update({
      where: { id: userId },
      data: {
        roles: {
          disconnect: { id: roleId },
        },
      },
    });
  },

  // Fetch all roles assigned to a user
  getUserRoles: async (userId) => {
    return await db.user.findUnique({
      where: { id: userId },
      select: { roles: true },
    });
  },

  // Fetch all capabilities (permissions)
  getAllCapabilities: async () => {
    return await db.capability.findMany();
  },

  // Assign a capability to a role
  assignCapabilityToRole: async (roleId, capability) => {
    await db.role.update({
      where: { id: roleId },
      data: {
        capabilities: {
          connect: { name: capability },
        },
      },
    });
  },

  // Revoke a capability from a role
  revokeCapabilityFromRole: async (roleId, capability) => {
    await db.role.update({
      where: { id: roleId },
      data: {
        capabilities: {
          disconnect: { name: capability },
        },
      },
    });
  },

  // Fetch the audit log
  getAuditLog: async () => {
    return await db.auditLog.findMany();
  },

  // Fetch all permission requests
  getAllPermissionRequests: async () => {
    return await db.permissionRequest.findMany();
  },

  // Approve a permission request
  approvePermissionRequest: async (requestId) => {
    await db.permissionRequest.update({
      where: { id: requestId },
      data: { status: "approved" },
    });
  },

  // Deny a permission request
  denyPermissionRequest: async (requestId) => {
    await db.permissionRequest.update({
      where: { id: requestId },
      data: { status: "denied" },
    });
  },
};

module.exports = permissionsService;
