const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class JobTrackerService {
  async createJobApplication(data) {
    if (!data.companyName) {
      throw new Error("Company name is required");
    }
    // Ensure all required fields are passed to Prisma
    return await prisma.jobApplication.create({
      data: {
        companyName: data.companyName,
        positionTitle: data.positionTitle,
        location: data.location,
        jobPostingUrl: data.jobPostingUrl,
        applicationDate: new Date(data.applicationDate), // Ensure correct date format
        applicationStatus: data.applicationStatus || "APPLIED",

        // Use the user relation with userId
        user: {
          connect: {
            id: data.userId, // Assuming the userId is provided correctly
          },
        },

        // Optional fields, only include if they exist
        source: data.source || null,
        resumeVersion: data.resumeVersion || null,
        coverLetter: data.coverLetter || null,
        followUpDate: data.followUpDate ? new Date(data.followUpDate) : null,
        nextAction: data.nextAction || null,
        recruiterName: data.recruiterName || null,
        recruiterEmail: data.recruiterEmail || null,
        recruiterPhone: data.recruiterPhone || null,
        hiringManagerName: data.hiringManagerName || null,
        referralContact: data.referralContact || null,
        salaryOffered: data.salaryOffered || null,
        benefits: data.benefits || null,
        equity: data.equity || null,
        prosAndCons: data.prosAndCons || null,
        jobDescription: data.jobDescription || null,
        companyResearch: data.companyResearch || null,
        applicationNotes: data.applicationNotes || null,
        offerReceived: data.offerReceived || false,
        offerAccepted: data.offerAccepted || false,
        reasonForRejection: data.reasonForRejection || null,
        resumeFile: data.resumeFile || null,
        coverLetterFile: data.coverLetterFile || null,
        portfolioLinks: data.portfolioLinks || null,
        jobCategory: data.jobCategory || null,
        industry: data.industry || null,
        priorityLevel: data.priorityLevel || null,
        externalJobId: data.externalJobId || null,
        apiLinks: data.apiLinks || null,
      },
    });
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
