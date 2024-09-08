const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class JobTrackerService {
  async createJobApplication(data) {
    return await prisma.jobApplication.create({ data });
  }

  async getAllJobApplications(userId) {
    return await prisma.jobApplication.findMany({
      where: { userId },
      include: { interviewRounds: true },
    });
  }

  async getJobApplicationById(id) {
    return await prisma.jobApplication.findUnique({
      where: { id: parseInt(id) },
      include: { interviewRounds: true },
    });
  }

  async updateJobApplication(id, data) {
    // Adding check to prevent Prisma from erroring when ID is not found
    const jobApplication = await this.getJobApplicationById(id);
    if (!jobApplication) {
      throw new Error("Job Application not found");
    }

    // Remove interviewRounds from the data if you're not updating them
    const { interviewRounds, ...updateData } = data;

    // Check if interviewRounds is provided and construct the correct structure for updating it
    let interviewRoundsUpdate = {};
    if (interviewRounds) {
      interviewRoundsUpdate = {
        interviewRounds: {
          // For example: updating multiple interview rounds or adding new ones
          updateMany: interviewRounds.map((round) => ({
            where: { id: round.id }, // Assuming each round has an ID
            data: round,
          })),
        },
      };
    }

    // Merge the interviewRounds update (if any) with the rest of the data
    return await prisma.jobApplication.update({
      where: { id: parseInt(id) },
      data: {
        ...updateData,
        ...interviewRoundsUpdate, // This is conditionally added if interviewRounds is being updated
      },
    });
  }

  async deleteJobApplication(id) {
    return await prisma.jobApplication.delete({
      where: { id: parseInt(id) },
    });
  }

  async addInterviewRound(jobApplicationId, data) {
    return await prisma.interviewRound.create({
      data: { ...data, jobApplicationId: parseInt(jobApplicationId) },
    });
  }

  async updateInterviewRound(id, data) {
    return await prisma.interviewRound.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async deleteInterviewRound(id) {
    return await prisma.interviewRound.delete({
      where: { id: parseInt(id) },
    });
  }
  async createBulkJobApplications(data) {
    return await prisma.jobApplication.createMany({
      data,
      skipDuplicates: true, // Optional: skips duplicates if they exist
    });
  }
}

module.exports = new JobTrackerService();
