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
ALTER TABLE "QualityControl" DROP CONSTRAINT "QualityControl_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reminder" DROP CONSTRAINT "Reminder_userId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_userId_fkey";

-- DropForeignKey
ALTER TABLE "SavingsRecord" DROP CONSTRAINT "SavingsRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- AlterTable
ALTER TABLE "APILog" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AgentFeedback" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AgentLog" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AuditLog" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "BudgetRecord" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "DebtRecord" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ExcelDocument" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ExpenseRecord" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Goal" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "IncomeRecord" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "InvestmentRecord" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "NetWorthSummary" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Preference" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QualityControl" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reminder" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Report" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SavingsRecord" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "IncomeRecord" ADD CONSTRAINT "IncomeRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseRecord" ADD CONSTRAINT "ExpenseRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetRecord" ADD CONSTRAINT "BudgetRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebtRecord" ADD CONSTRAINT "DebtRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingsRecord" ADD CONSTRAINT "SavingsRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestmentRecord" ADD CONSTRAINT "InvestmentRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NetWorthSummary" ADD CONSTRAINT "NetWorthSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentLog" ADD CONSTRAINT "AgentLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentFeedback" ADD CONSTRAINT "AgentFeedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExcelDocument" ADD CONSTRAINT "ExcelDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QualityControl" ADD CONSTRAINT "QualityControl_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "APILog" ADD CONSTRAINT "APILog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
