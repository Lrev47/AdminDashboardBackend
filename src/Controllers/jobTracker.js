const jobTrackerService = require("../services/jobTrackerService");

const validApplicationStatuses = [
  "APPLIED",
  "PHONE_SCREEN",
  "INTERVIEW_SCHEDULED",
  "INTERVIEW_COMPLETED",
  "OFFER_RECEIVED",
  "REJECTED",
  "ACCEPTED",
];

class JobTrackerController {
  async createJobApplication(req, res) {
    try {
      const data = req.body;

      console.log("Request body:", data);

      // Check if the required fields are present
      if (!data.companyName) {
        throw new Error("Company name is required");
      }

      data.userId = req.user.id; // Assuming user authentication middleware
      const jobApplication = await jobTrackerService.createJobApplication(data);
      res.status(201).json(jobApplication);
    } catch (error) {
      console.error("Error in createJobApplication:", error);
      res.status(400).json({ error: error.message }); // Return 400 for validation errors
    }
  }

  async getAllJobApplications(req, res) {
    try {
      const userId = req.user.id; // Assuming user authentication middleware
      const jobApplications = await jobTrackerService.getAllJobApplications(
        userId
      );
      res.status(200).json(jobApplications);
    } catch (error) {
      console.error("Error in getAllJobApplications:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async getJobApplicationById(req, res) {
    try {
      const id = req.params.id;
      const jobApplication = await jobTrackerService.getJobApplicationById(id);
      if (!jobApplication) {
        return res.status(404).json({ error: "Job Application not found" });
      }
      res.status(200).json(jobApplication);
    } catch (error) {
      console.error("Error in getJobApplicationById:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async updateJobApplication(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;

      // Added existence check to avoid Prisma error when ID is not found
      const existingJobApplication =
        await jobTrackerService.getJobApplicationById(id);
      if (!existingJobApplication) {
        return res.status(404).json({ error: "Job Application not found" });
      }

      const jobApplication = await jobTrackerService.updateJobApplication(
        id,
        data
      );
      res.status(200).json(jobApplication);
    } catch (error) {
      console.error("Error in updateJobApplication:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async deleteJobApplication(req, res) {
    try {
      const id = req.params.id;
      await jobTrackerService.deleteJobApplication(id);
      res.status(204).send();
    } catch (error) {
      console.error("Error in deleteJobApplication:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async addInterviewRound(req, res) {
    try {
      const jobApplicationId = req.params.jobApplicationId;
      const data = req.body;
      const interviewRound = await jobTrackerService.addInterviewRound(
        jobApplicationId,
        data
      );
      res.status(201).json(interviewRound);
    } catch (error) {
      console.error("Error in addInterviewRound:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async updateInterviewRound(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const interviewRound = await jobTrackerService.updateInterviewRound(
        id,
        data
      );
      res.status(200).json(interviewRound);
    } catch (error) {
      console.error("Error in updateInterviewRound:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async deleteInterviewRound(req, res) {
    try {
      const id = req.params.id;
      await jobTrackerService.deleteInterviewRound(id);
      res.status(204).send();
    } catch (error) {
      console.error("Error in deleteInterviewRound:", error);
      res.status(500).json({ error: error.message });
    }
  }

  async createBulkJobApplications(req, res) {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const jobApplications = req.body.map((application) => {
        // Validate the applicationStatus
        const applicationStatus = application.applicationStatus
          ? application.applicationStatus.toUpperCase()
          : "APPLIED";

        if (!validApplicationStatuses.includes(applicationStatus)) {
          throw new Error(
            `Invalid application status: ${application.applicationStatus}`
          );
        }

        // Ensure the applicationDate is in ISO format
        const applicationDate = application.applicationDate
          ? new Date(application.applicationDate).toISOString() // Convert to ISO format
          : new Date().toISOString(); // Default to current date in ISO format if not provided

        return {
          ...application,
          userId: req.user.id,
          applicationStatus, // Set validated applicationStatus
          applicationDate, // Use properly formatted date
        };
      });

      const createdApplications =
        await jobTrackerService.createBulkJobApplications(jobApplications);
      res.status(201).json({ count: createdApplications.count });
    } catch (error) {
      console.error("Error in createBulkJobApplications:", error);
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new JobTrackerController();
