const prisma = require("../services/pirsmaClient");

const userController = {
  getProfile: async (req, res, next) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user.userId },
      });
      res.json(user);
    } catch (error) {
      next(error);
    }
  },

  updateProfile: async (req, res, next) => {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: req.user.userId },
        data: req.body,
      });
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
