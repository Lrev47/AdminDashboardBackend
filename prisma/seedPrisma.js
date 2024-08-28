const { PrismaClient } = require("@prisma/client");
const path = require("path");

// Import the seed data from the seedData.js file
const seedData = require(path.join(__dirname, "seedData.js"));

const prisma = new PrismaClient();

async function main() {
  try {
    // Seed Users
    for (const user of seedData) {
      await prisma.user.create({
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          passwordHash: user.passwordHash,
          firstName: user.firstName,
          lastName: user.lastName,
          dateOfBirth: new Date(user.dateOfBirth),
          gender: user.gender,
          phoneNumber: user.phoneNumber,
          address: user.address,
          city: user.city,
          state: user.state,
          zipCode: user.zipCode,
          country: user.country,
          maritalStatus: user.maritalStatus,
          employmentStatus: user.employmentStatus,
          occupation: user.occupation,
          employerName: user.employerName,
          annualSalary: user.annualSalary,
          taxFilingStatus: user.taxFilingStatus,
          dependentsCount: user.dependentsCount,
          preferredCurrency: user.preferredCurrency,
          subscriptionType: user.subscriptionType,
          language: user.language,
          communicationPreferences: user.communicationPreferences,
          userRole: user.userRole,
          avatar: user.avatar,
          createdAt: new Date(user.createdAt),
          lastLogin: user.lastLogin ? new Date(user.lastLogin) : null,
          lastUpdate: new Date(user.lastUpdate),
          isVerified: user.isVerified,
          twoFactorEnabled: user.twoFactorEnabled,
          lastPasswordChange: user.lastPasswordChange
            ? new Date(user.lastPasswordChange)
            : null,
          accountStatus: user.accountStatus,
          loginAttempts: user.loginAttempts,

          // Income records (if any)
          incomeRecords: {
            create: user.incomeRecords.map((incomeRecord) => ({
              id: incomeRecord.id,
              incomeSource: incomeRecord.incomeSource,
              amount: incomeRecord.amount,
              date: new Date(incomeRecord.date),
              recurring: incomeRecord.recurring,
              taxable: incomeRecord.taxable,
            })),
          },

          // Expense records (if any)
          expenseRecords: {
            create: user.expenseRecords.map((expenseRecord) => ({
              id: expenseRecord.id,
              category: expenseRecord.category,
              amount: expenseRecord.amount,
              date: new Date(expenseRecord.date),
              description: expenseRecord.description,
              paymentMethod: expenseRecord.paymentMethod,
              merchantName: expenseRecord.merchantName,
              location: expenseRecord.location,
              isRecurring: expenseRecord.isRecurring,
              subscriptionEndDate: expenseRecord.subscriptionEndDate
                ? new Date(expenseRecord.subscriptionEndDate)
                : null,
            })),
          },
        },
      });
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
