const express = require("express");
const financialController = require("../Controllers/finance");

const router = express.Router();

// Account Routes
router.get("/accounts", financialController.getAllAccounts);
router.get("/accounts/:id", financialController.getAccount);
router.post("/accounts", financialController.createAccount);
router.put("/accounts/:id", financialController.updateAccount);
router.delete("/accounts/:id", financialController.deleteAccount);

// Transaction Routes
router.get("/transactions", financialController.getAllTransactions);
router.get("/transactions/:id", financialController.getTransaction);
router.post("/transactions", financialController.createTransaction);
router.put("/transactions/:id", financialController.updateTransaction);
router.delete("/transactions/:id", financialController.deleteTransaction);

// Budget Routes
router.get("/budgets", financialController.getAllBudgets);
router.get("/budgets/:id", financialController.getBudget);
router.post("/budgets", financialController.createBudget);
router.put("/budgets/:id", financialController.updateBudget);
router.delete("/budgets/:id", financialController.deleteBudget);

// Category Routes
router.get("/categories", financialController.getAllCategories);
router.post("/categories", financialController.createCategory);
router.put("/categories/:id", financialController.updateCategory);
router.delete("/categories/:id", financialController.deleteCategory);

// Report Routes
router.get("/reports", financialController.getAllReports);
router.post("/reports", financialController.createReport);

// Goal Routes
router.get("/goals", financialController.getAllGoals);
router.post("/goals", financialController.createGoal);
router.put("/goals/:id", financialController.updateGoal);
router.delete("/goals/:id", financialController.deleteGoal);

// Investment Routes
router.get("/investments", financialController.getAllInvestments);
router.post("/investments", financialController.createInvestment);
router.put("/investments/:id", financialController.updateInvestment);
router.delete("/investments/:id", financialController.deleteInvestment);

module.exports = router;
