const financialService = require("../services/financialService");

const financialController = {
  getAllAccounts: async (req, res, next) => {
    try {
      const accounts = await financialService.getAllAccounts();
      res.status(200).json(accounts);
    } catch (error) {
      next(error);
    }
  },

  getAccount: async (req, res, next) => {
    try {
      const account = await financialService.getAccountById(req.params.id);
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  },

  createAccount: async (req, res, next) => {
    try {
      const account = await financialService.createAccount(req.body);
      res.status(201).json(account);
    } catch (error) {
      next(error);
    }
  },

  updateAccount: async (req, res, next) => {
    try {
      const account = await financialService.updateAccount(
        req.params.id,
        req.body
      );
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  },

  deleteAccount: async (req, res, next) => {
    try {
      await financialService.deleteAccount(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getAllTransactions: async (req, res, next) => {
    try {
      const transactions = await financialService.getAllTransactions();
      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  },

  getTransaction: async (req, res, next) => {
    try {
      const transaction = await financialService.getTransactionById(
        req.params.id
      );
      res.status(200).json(transaction);
    } catch (error) {
      next(error);
    }
  },

  createTransaction: async (req, res, next) => {
    try {
      const transaction = await financialService.createTransaction(req.body);
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  },

  updateTransaction: async (req, res, next) => {
    try {
      const transaction = await financialService.updateTransaction(
        req.params.id,
        req.body
      );
      res.status(200).json(transaction);
    } catch (error) {
      next(error);
    }
  },

  deleteTransaction: async (req, res, next) => {
    try {
      await financialService.deleteTransaction(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getAllBudgets: async (req, res, next) => {
    try {
      const budgets = await financialService.getAllBudgets();
      res.status(200).json(budgets);
    } catch (error) {
      next(error);
    }
  },

  getBudget: async (req, res, next) => {
    try {
      const budget = await financialService.getBudgetById(req.params.id);
      res.status(200).json(budget);
    } catch (error) {
      next(error);
    }
  },

  createBudget: async (req, res, next) => {
    try {
      const budget = await financialService.createBudget(req.body);
      res.status(201).json(budget);
    } catch (error) {
      next(error);
    }
  },

  updateBudget: async (req, res, next) => {
    try {
      const budget = await financialService.updateBudget(
        req.params.id,
        req.body
      );
      res.status(200).json(budget);
    } catch (error) {
      next(error);
    }
  },

  deleteBudget: async (req, res, next) => {
    try {
      await financialService.deleteBudget(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getAllCategories: async (req, res, next) => {
    try {
      const categories = await financialService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },

  createCategory: async (req, res, next) => {
    try {
      const category = await financialService.createCategory(req.body);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  },

  updateCategory: async (req, res, next) => {
    try {
      const category = await financialService.updateCategory(
        req.params.id,
        req.body
      );
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },

  deleteCategory: async (req, res, next) => {
    try {
      await financialService.deleteCategory(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getAllReports: async (req, res, next) => {
    try {
      const reports = await financialService.getAllReports();
      res.status(200).json(reports);
    } catch (error) {
      next(error);
    }
  },

  createReport: async (req, res, next) => {
    try {
      const report = await financialService.createReport(req.body);
      res.status(201).json(report);
    } catch (error) {
      next(error);
    }
  },

  getAllGoals: async (req, res, next) => {
    try {
      const goals = await financialService.getAllGoals();
      res.status(200).json(goals);
    } catch (error) {
      next(error);
    }
  },

  createGoal: async (req, res, next) => {
    try {
      const goal = await financialService.createGoal(req.body);
      res.status(201).json(goal);
    } catch (error) {
      next(error);
    }
  },

  updateGoal: async (req, res, next) => {
    try {
      const goal = await financialService.updateGoal(req.params.id, req.body);
      res.status(200).json(goal);
    } catch (error) {
      next(error);
    }
  },

  deleteGoal: async (req, res, next) => {
    try {
      await financialService.deleteGoal(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getAllInvestments: async (req, res, next) => {
    try {
      const investments = await financialService.getAllInvestments();
      res.status(200).json(investments);
    } catch (error) {
      next(error);
    }
  },

  createInvestment: async (req, res, next) => {
    try {
      const investment = await financialService.createInvestment(req.body);
      res.status(201).json(investment);
    } catch (error) {
      next(error);
    }
  },

  updateInvestment: async (req, res, next) => {
    try {
      const investment = await financialService.updateInvestment(
        req.params.id,
        req.body
      );
      res.status(200).json(investment);
    } catch (error) {
      next(error);
    }
  },

  deleteInvestment: async (req, res, next) => {
    try {
      await financialService.deleteInvestment(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = financialController;
