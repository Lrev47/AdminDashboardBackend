const userService = require("../services/userService");

const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  getUser: async (req, res, next) => {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  patchUser: async (req, res, next) => {
    try {
      const user = await userService.patchUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  getUserStatus: async (req, res, next) => {
    try {
      const status = await userService.getUserStatus(req.params.id);
      res.status(200).json(status);
    } catch (error) {
      next(error);
    }
  },

  getMe: async (req, res, next) => {
    try {
      const user = await userService.getMe(req.user.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  updateMe: async (req, res, next) => {
    try {
      const user = await userService.updateMe(req.user.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  searchUsers: async (req, res, next) => {
    try {
      const users = await userService.searchUsers(req.body.query);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  bulkCreateUsers: async (req, res, next) => {
    try {
      const users = await userService.bulkCreateUsers(req.body.users);
      res.status(201).json(users);
    } catch (error) {
      next(error);
    }
  },

  assignRoleToUser: async (req, res, next) => {
    try {
      await userService.assignRoleToUser(req.body.userId, req.body.role);
      res.status(200).json({ message: "Role assigned successfully" });
    } catch (error) {
      next(error);
    }
  },

  revokeRoleFromUser: async (req, res, next) => {
    try {
      await userService.revokeRoleFromUser(req.body.userId, req.body.role);
      res.status(200).json({ message: "Role revoked successfully" });
    } catch (error) {
      next(error);
    }
  },

  getUserRoles: async (req, res, next) => {
    try {
      const roles = await userService.getUserRoles(req.params.id);
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  },

  getUserActivity: async (req, res, next) => {
    try {
      const activity = await userService.getUserActivity(req.params.id);
      res.status(200).json(activity);
    } catch (error) {
      next(error);
    }
  },

  createUserNotification: async (req, res, next) => {
    try {
      const notification = await userService.createUserNotification(
        req.body.userId,
        req.body.notification
      );
      res.status(201).json(notification);
    } catch (error) {
      next(error);
    }
  },

  getUserNotifications: async (req, res, next) => {
    try {
      const notifications = await userService.getUserNotifications(
        req.params.id
      );
      res.status(200).json(notifications);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
