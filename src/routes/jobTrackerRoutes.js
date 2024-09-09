const express = require("express");
const jobTrackerController = require("../Controllers/jobTracker");
const {
  protect,
  restrictTo,
  logRequest,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);
router.use(logRequest);

// Job Application routes
router.post("/", jobTrackerController.createJobApplication);
// router.post("/bulk", jobTrackerController.createBulkJobApplications);
router.get("/", jobTrackerController.getAllJobApplications);
router.get("/:id", jobTrackerController.getJobApplicationById);
router.put("/:id", jobTrackerController.updateJobApplication);
router.delete("/:id", jobTrackerController.deleteJobApplication);

// Interview Round routes
router.post(
  "/:jobApplicationId/interview-rounds",
  jobTrackerController.addInterviewRound
);
router.put("/interview-rounds/:id", jobTrackerController.updateInterviewRound);
router.delete(
  "/interview-rounds/:id",
  jobTrackerController.deleteInterviewRound
);

module.exports = router;
