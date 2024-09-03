-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'PHONE_SCREEN', 'INTERVIEW_SCHEDULED', 'INTERVIEW_COMPLETED', 'OFFER_RECEIVED', 'REJECTED', 'ACCEPTED');

-- CreateEnum
CREATE TYPE "JobCategory" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('TECH', 'FINANCE', 'HEALTHCARE', 'MARKETING', 'EDUCATION', 'OTHER');

-- CreateEnum
CREATE TYPE "PriorityLevel" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "companyName" TEXT NOT NULL,
    "positionTitle" TEXT NOT NULL,
    "location" TEXT,
    "jobPostingUrl" TEXT,
    "applicationDate" TIMESTAMP(3) NOT NULL,
    "source" TEXT,
    "resumeVersion" TEXT,
    "coverLetter" TEXT,
    "applicationStatus" "ApplicationStatus" NOT NULL DEFAULT 'APPLIED',
    "lastUpdatedDate" TIMESTAMP(3) NOT NULL,
    "followUpDate" TIMESTAMP(3),
    "nextAction" TEXT,
    "recruiterName" TEXT,
    "recruiterEmail" TEXT,
    "recruiterPhone" TEXT,
    "hiringManagerName" TEXT,
    "referralContact" TEXT,
    "salaryOffered" DOUBLE PRECISION,
    "benefits" TEXT,
    "equity" TEXT,
    "prosAndCons" TEXT,
    "jobDescription" TEXT,
    "companyResearch" TEXT,
    "applicationNotes" TEXT,
    "offerReceived" BOOLEAN NOT NULL DEFAULT false,
    "offerAccepted" BOOLEAN NOT NULL DEFAULT false,
    "reasonForRejection" TEXT,
    "resumeFile" TEXT,
    "coverLetterFile" TEXT,
    "portfolioLinks" TEXT,
    "jobCategory" "JobCategory",
    "industry" "Industry",
    "priorityLevel" "PriorityLevel",
    "externalJobId" TEXT,
    "apiLinks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewRound" (
    "id" SERIAL NOT NULL,
    "jobApplicationId" INTEGER NOT NULL,
    "interviewDate" TIMESTAMP(3) NOT NULL,
    "interviewers" TEXT NOT NULL,
    "interviewFeedback" TEXT,

    CONSTRAINT "InterviewRound_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewRound" ADD CONSTRAINT "InterviewRound_jobApplicationId_fkey" FOREIGN KEY ("jobApplicationId") REFERENCES "JobApplication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
