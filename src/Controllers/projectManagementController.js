const projectService = require("../services/projectService");

const projectController = {
  getAllProjects: async (req, res, next) => {
    try {
      const projects = await projectService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  },

  getProject: async (req, res, next) => {
    try {
      const project = await projectService.getProjectById(req.params.id);
      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  },

  createProject: async (req, res, next) => {
    try {
      const project = await projectService.createProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      next(error);
    }
  },

  updateProject: async (req, res, next) => {
    try {
      const project = await projectService.updateProject(
        req.params.id,
        req.body
      );
      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  },

  deleteProject: async (req, res, next) => {
    try {
      await projectService.deleteProject(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getMilestones: async (req, res, next) => {
    try {
      const milestones = await projectService.getMilestones(req.params.id);
      res.status(200).json(milestones);
    } catch (error) {
      next(error);
    }
  },

  createMilestone: async (req, res, next) => {
    try {
      const milestone = await projectService.createMilestone(
        req.params.id,
        req.body
      );
      res.status(201).json(milestone);
    } catch (error) {
      next(error);
    }
  },

  updateMilestone: async (req, res, next) => {
    try {
      const milestone = await projectService.updateMilestone(
        req.params.id,
        req.body
      );
      res.status(200).json(milestone);
    } catch (error) {
      next(error);
    }
  },

  deleteMilestone: async (req, res, next) => {
    try {
      await projectService.deleteMilestone(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getTasks: async (req, res, next) => {
    try {
      const tasks = await projectService.getTasks(req.params.id);
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  },

  createTask: async (req, res, next) => {
    try {
      const task = await projectService.createTask(req.params.id, req.body);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  },

  updateTask: async (req, res, next) => {
    try {
      const task = await projectService.updateTask(req.params.id, req.body);
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  },

  deleteTask: async (req, res, next) => {
    try {
      await projectService.deleteTask(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getProjectTags: async (req, res, next) => {
    try {
      const tags = await projectService.getProjectTags();
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  },

  assignUserToProject: async (req, res, next) => {
    try {
      await projectService.assignUserToProject(req.params.id, req.body.userId);
      res
        .status(200)
        .json({ message: "User assigned to project successfully" });
    } catch (error) {
      next(error);
    }
  },

  unassignUserFromProject: async (req, res, next) => {
    try {
      await projectService.unassignUserFromProject(
        req.params.id,
        req.body.userId
      );
      res
        .status(200)
        .json({ message: "User unassigned from project successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = projectController;
