/*
  Warnings:

  - You are about to drop the column `annualSalary` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `APILog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AgentFeedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AgentLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BudgetRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DebtRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExcelDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExpenseRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Goal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IncomeRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InvestmentRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NetWorthSummary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProgressLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QualityControl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reminder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavingsRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "APILog" DROP CONSTRAINT "APILog_userId_fkey";

-- DropForeignKey
ALTER TABLE "AgentFeedback" DROP CONSTRAINT "AgentFeedback_userId_fkey";

-- DropForeignKey
ALTER TABLE "AgentLog" DROP CONSTRAINT "AgentLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetRecord" DROP CONSTRAINT "BudgetRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "DebtRecord" DROP CONSTRAINT "DebtRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExcelDocument" DROP CONSTRAINT "ExcelDocument_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExpenseRecord" DROP CONSTRAINT "ExpenseRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_userId_fkey";

-- DropForeignKey
ALTER TABLE "IncomeRecord" DROP CONSTRAINT "IncomeRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "InvestmentRecord" DROP CONSTRAINT "InvestmentRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "NetWorthSummary" DROP CONSTRAINT "NetWorthSummary_userId_fkey";

-- DropForeignKey
ALTER TABLE "Preference" DROP CONSTRAINT "Preference_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProgressLog" DROP CONSTRAINT "ProgressLog_goalId_fkey";

-- DropForeignKey
ALTER TABLE "ProgressLog" DROP CONSTRAINT "ProgressLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "QualityControl" DROP CONSTRAINT "QualityControl_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reminder" DROP CONSTRAINT "Reminder_userId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_userId_fkey";

-- DropForeignKey
ALTER TABLE "SavingsRecord" DROP CONSTRAINT "SavingsRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "annualSalary";

-- DropTable
DROP TABLE "APILog";

-- DropTable
DROP TABLE "AgentFeedback";

-- DropTable
DROP TABLE "AgentLog";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "BudgetRecord";

-- DropTable
DROP TABLE "DebtRecord";

-- DropTable
DROP TABLE "ExcelDocument";

-- DropTable
DROP TABLE "ExpenseRecord";

-- DropTable
DROP TABLE "Goal";

-- DropTable
DROP TABLE "IncomeRecord";

-- DropTable
DROP TABLE "InvestmentRecord";

-- DropTable
DROP TABLE "NetWorthSummary";

-- DropTable
DROP TABLE "Preference";

-- DropTable
DROP TABLE "ProgressLog";

-- DropTable
DROP TABLE "QualityControl";

-- DropTable
DROP TABLE "Reminder";

-- DropTable
DROP TABLE "Report";

-- DropTable
DROP TABLE "SavingsRecord";

-- DropTable
DROP TABLE "Task";
