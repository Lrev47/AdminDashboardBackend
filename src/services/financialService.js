const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const financialService = {
  // Fetch all accounts
  getAllAccounts: async () => {
    return await db.account.findMany();
  },

  // Fetch a specific account by its ID
  getAccountById: async (id) => {
    return await db.account.findUnique({ where: { id } });
  },

  // Create a new account
  createAccount: async (accountData) => {
    const account = await db.account.create({
      data: accountData,
    });
    return account;
  },

  // Update an existing account by its ID
  updateAccount: async (id, updateData) => {
    const account = await db.account.update({
      where: { id },
      data: updateData,
    });
    return account;
  },

  // Delete an account by its ID
  deleteAccount: async (id) => {
    await db.account.delete({ where: { id } });
  },

  // Fetch all transactions
  getAllTransactions: async () => {
    return await db.transaction.findMany();
  },

  // Fetch a specific transaction by its ID
  getTransactionById: async (id) => {
    return await db.transaction.findUnique({ where: { id } });
  },

  // Create a new transaction
  createTransaction: async (transactionData) => {
    const transaction = await db.transaction.create({
      data: transactionData,
    });
    return transaction;
  },

  // Update an existing transaction by its ID
  updateTransaction: async (id, updateData) => {
    const transaction = await db.transaction.update({
      where: { id },
      data: updateData,
    });
    return transaction;
  },

  // Delete a transaction by its ID
  deleteTransaction: async (id) => {
    await db.transaction.delete({ where: { id } });
  },

  // Fetch all budgets
  getAllBudgets: async () => {
    return await db.budget.findMany();
  },

  // Fetch a specific budget by its ID
  getBudgetById: async (id) => {
    return await db.budget.findUnique({ where: { id } });
  },

  // Create a new budget
  createBudget: async (budgetData) => {
    const budget = await db.budget.create({
      data: budgetData,
    });
    return budget;
  },

  // Update an existing budget by its ID
  updateBudget: async (id, updateData) => {
    const budget = await db.budget.update({
      where: { id },
      data: updateData,
    });
    return budget;
  },

  // Delete a budget by its ID
  deleteBudget: async (id) => {
    await db.budget.delete({ where: { id } });
  },

  // Fetch all categories
  getAllCategories: async () => {
    return await db.category.findMany();
  },

  // Create a new category
  createCategory: async (categoryData) => {
    const category = await db.category.create({
      data: categoryData,
    });
    return category;
  },

  // Update an existing category by its ID
  updateCategory: async (id, updateData) => {
    const category = await db.category.update({
      where: { id },
      data: updateData,
    });
    return category;
  },

  // Delete a category by its ID
  deleteCategory: async (id) => {
    await db.category.delete({ where: { id } });
  },

  // Fetch all reports
  getAllReports: async () => {
    return await db.report.findMany();
  },

  // Create a new report
  createReport: async (reportData) => {
    const report = await db.report.create({
      data: reportData,
    });
    return report;
  },

  // Fetch all financial goals
  getAllGoals: async () => {
    return await db.goal.findMany();
  },

  // Create a new financial goal
  createGoal: async (goalData) => {
    const goal = await db.goal.create({
      data: goalData,
    });
    return goal;
  },

  // Update an existing financial goal by its ID
  updateGoal: async (id, updateData) => {
    const goal = await db.goal.update({
      where: { id },
      data: updateData,
    });
    return goal;
  },

  // Delete a financial goal by its ID
  deleteGoal: async (id) => {
    await db.goal.delete({ where: { id } });
  },

  // Fetch all investments
  getAllInvestments: async () => {
    return await db.investment.findMany();
  },

  // Create a new investment
  createInvestment: async (investmentData) => {
    const investment = await db.investment.create({
      data: investmentData,
    });
    return investment;
  },

  // Update an existing investment by its ID
  updateInvestment: async (id, updateData) => {
    const investment = await db.investment.update({
      where: { id },
      data: updateData,
    });
    return investment;
  },

  // Delete an investment by its ID
  deleteInvestment: async (id) => {
    await db.investment.delete({ where: { id } });
  },
};

module.exports = financialService;
