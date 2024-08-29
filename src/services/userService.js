const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const userService = {
  // Fetch all users
  getAllUsers: async () => {
    return await db.user.findMany();
  },

  // Fetch a specific user by its ID
  getUserById: async (id) => {
    return await db.user.findUnique({ where: { id } });
  },

  // Create a new user
  createUser: async (userData) => {
    const newUser = await db.user.create({
      data: userData,
    });
    return newUser;
  },

  // Update an existing user by its ID
  updateUser: async (id, updateData) => {
    const updatedUser = await db.user.update({
      where: { id },
      data: updateData,
    });
    return updatedUser;
  },

  // Delete a user by its ID
  deleteUser: async (id) => {
    await db.user.delete({ where: { id } });
  },

  // Patch a user (partial update)
  patchUser: async (id, patchData) => {
    const patchedUser = await db.user.update({
      where: { id },
      data: patchData,
    });
    return patchedUser;
  },

  // Get the status of a user
  getUserStatus: async (id) => {
    const user = await db.user.findUnique({
      where: { id },
      select: { status: true },
    });
    return user.status;
  },

  // Get the authenticated user's profile
  getMe: async (userId) => {
    return await db.user.findUnique({ where: { id: userId } });
  },

  // Update the authenticated user's profile
  updateMe: async (userId, updateData) => {
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: updateData,
    });
    return updatedUser;
  },

  // Search for users based on a query
  searchUsers: async (query) => {
    return await db.user.findMany({
      where: {
        OR: [{ username: { contains: query } }, { email: { contains: query } }],
      },
    });
  },

  // Bulk create users
  bulkCreateUsers: async (usersData) => {
    const createdUsers = await db.user.createMany({
      data: usersData,
    });
    return createdUsers;
  },

  // Assign a role to a user
  assignRoleToUser: async (userId, role) => {
    await db.user.update({
      where: { id: userId },
      data: {
        roles: {
          connect: { name: role },
        },
      },
    });
  },

  // Revoke a role from a user
  revokeRoleFromUser: async (userId, role) => {
    await db.user.update({
      where: { id: userId },
      data: {
        roles: {
          disconnect: { name: role },
        },
      },
    });
  },

  // Fetch all roles assigned to a user
  getUserRoles: async (userId) => {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { roles: true },
    });
    return user.roles;
  },

  // Fetch user activity (e.g., logs, actions)
  getUserActivity: async (userId) => {
    return await db.userActivity.findMany({ where: { userId } });
  },

  // Create a notification for a user
  createUserNotification: async (userId, notificationData) => {
    const newNotification = await db.notification.create({
      data: {
        userId,
        ...notificationData,
      },
    });
    return newNotification;
  },

  // Fetch all notifications for a specific user
  getUserNotifications: async (userId) => {
    return await db.notification.findMany({ where: { userId } });
  },
};

module.exports = userService;
