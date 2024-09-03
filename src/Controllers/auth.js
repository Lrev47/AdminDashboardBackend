const authService = require("../services/authService");

const authController = {
  register: async (req, res, next) => {
    try {
      const user = await authService.registerUser(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { token, user } = await authService.loginUser(req.body);
      res.status(200).json({ success: true, token, data: user });
    } catch (error) {
      next(error);
    }
  },

  logout: async (req, res, next) => {
    try {
      await authService.logoutUser(req.body.token);
      res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
      next(error);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const newToken = await authService.refreshToken(req.body.refreshToken);
      res.status(200).json({ success: true, token: newToken });
    } catch (error) {
      next(error);
    }
  },

  forgotPassword: async (req, res, next) => {
    try {
      await authService.forgotPassword(req.body.email);
      res
        .status(200)
        .json({ success: true, message: "Password reset link sent" });
    } catch (error) {
      next(error);
    }
  },

  resetPassword: async (req, res, next) => {
    try {
      await authService.resetPassword(req.body.token, req.body.newPassword);
      res
        .status(200)
        .json({ success: true, message: "Password has been reset" });
    } catch (error) {
      next(error);
    }
  },

  verifyEmail: async (req, res, next) => {
    try {
      await authService.verifyEmail(req.query.token);
      res
        .status(200)
        .json({ success: true, message: "Email verified successfully" });
    } catch (error) {
      next(error);
    }
  },

  me: async (req, res, next) => {
    try {
      console.log("User in request:", req.user); // Should contain userId
      const userId = req.user.userId; // Extract userId
      console.log("Extracted userId:", userId); // Debugging statement

      const user = await authService.getUserProfile(userId);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      console.error("Error in /auth/me:", error);
      next(error);
    }
  },

  changePassword: async (req, res, next) => {
    try {
      await authService.changePassword(
        req.user.id,
        req.body.oldPassword,
        req.body.newPassword
      );
      res
        .status(200)
        .json({ success: true, message: "Password changed successfully" });
    } catch (error) {
      next(error);
    }
  },

  getRoles: async (req, res, next) => {
    try {
      const roles = await authService.getRoles();
      res.status(200).json({ success: true, data: roles });
    } catch (error) {
      next(error);
    }
  },

  assignRole: async (req, res, next) => {
    try {
      await authService.assignRole(req.body.userId, req.body.role);
      res
        .status(200)
        .json({ success: true, message: "Role assigned successfully" });
    } catch (error) {
      next(error);
    }
  },

  revokeRole: async (req, res, next) => {
    try {
      await authService.revokeRole(req.body.userId, req.body.role);
      res
        .status(200)
        .json({ success: true, message: "Role revoked successfully" });
    } catch (error) {
      next(error);
    }
  },

  verifyToken: async (req, res, next) => {
    try {
      const isValid = await authService.verifyToken(req.body.token);
      res.status(200).json({ success: true, valid: isValid });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;
