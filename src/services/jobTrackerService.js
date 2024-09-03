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
    return await prisma.jobApplication.update({
      where: { id: parseInt(id) },
      data,
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
