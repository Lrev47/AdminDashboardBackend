const express = require("express");
const projectController = require("../Controllers/project");

const router = express.Router();

// Project Management
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProject);
router.post("/", projectController.createProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

// Milestone Management
router.get("/:id/milestones", projectController.getMilestones);
router.post("/:id/milestones", projectController.createMilestone);
router.put("/:id/milestones", projectController.updateMilestone);
router.delete("/:id/milestones", projectController.deleteMilestone);

// Task Management
router.get("/:id/tasks", projectController.getTasks);
router.post("/:id/tasks", projectController.createTask);
router.put("/:id/tasks", projectController.updateTask);
router.delete("/:id/tasks", projectController.deleteTask);

// Project Tags
router.get("/tags", projectController.getProjectTags);

// User Assignment to Project
router.post("/:id/assign-user", projectController.assignUserToProject);
router.post("/:id/unassign-user", projectController.unassignUserFromProject);

module.exports = router;
