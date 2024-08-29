const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const projectService = {
  // Fetch all projects
  getAllProjects: async () => {
    return await db.project.findMany();
  },

  // Fetch a specific project by its ID
  getProjectById: async (id) => {
    return await db.project.findUnique({ where: { id } });
  },

  // Create a new project
  createProject: async (projectData) => {
    const newProject = await db.project.create({
      data: projectData,
    });
    return newProject;
  },

  // Update an existing project by its ID
  updateProject: async (id, updateData) => {
    const updatedProject = await db.project.update({
      where: { id },
      data: updateData,
    });
    return updatedProject;
  },

  // Delete a project by its ID
  deleteProject: async (id) => {
    await db.project.delete({ where: { id } });
  },

  // Fetch all milestones for a specific project by its ID
  getMilestones: async (projectId) => {
    return await db.milestone.findMany({ where: { projectId } });
  },

  // Create a new milestone for a project
  createMilestone: async (projectId, milestoneData) => {
    const newMilestone = await db.milestone.create({
      data: {
        ...milestoneData,
        projectId,
      },
    });
    return newMilestone;
  },

  // Update an existing milestone by its ID
  updateMilestone: async (milestoneId, updateData) => {
    const updatedMilestone = await db.milestone.update({
      where: { id: milestoneId },
      data: updateData,
    });
    return updatedMilestone;
  },

  // Delete a milestone by its ID
  deleteMilestone: async (milestoneId) => {
    await db.milestone.delete({ where: { id: milestoneId } });
  },

  // Fetch all tasks for a specific project by its ID
  getTasks: async (projectId) => {
    return await db.task.findMany({ where: { projectId } });
  },

  // Create a new task for a project
  createTask: async (projectId, taskData) => {
    const newTask = await db.task.create({
      data: {
        ...taskData,
        projectId,
      },
    });
    return newTask;
  },

  // Update an existing task by its ID
  updateTask: async (taskId, updateData) => {
    const updatedTask = await db.task.update({
      where: { id: taskId },
      data: updateData,
    });
    return updatedTask;
  },

  // Delete a task by its ID
  deleteTask: async (taskId) => {
    await db.task.delete({ where: { id: taskId } });
  },

  // Fetch all tags associated with projects
  getProjectTags: async () => {
    return await db.projectTag.findMany();
  },

  // Assign a user to a project
  assignUserToProject: async (projectId, userId) => {
    await db.project.update({
      where: { id: projectId },
      data: {
        users: {
          connect: { id: userId },
        },
      },
    });
  },

  // Unassign a user from a project
  unassignUserFromProject: async (projectId, userId) => {
    await db.project.update({
      where: { id: projectId },
      data: {
        users: {
          disconnect: { id: userId },
        },
      },
    });
  },
};

module.exports = projectService;
