# Backend for Financial Dashboard

## Overview

This backend is designed to support a financial dashboard application, where users can manage their financial information, interact with AI agents, track their income and expenses, and generate reports. The backend is built using Express.js, Prisma ORM, and PostgreSQL, providing a robust, scalable, and flexible foundation for handling complex data relationships and operations.

### **Technologies Used**

- **Node.js**: JavaScript runtime used to build the server-side logic.
- **Express.js**: Web framework for creating the API endpoints and handling HTTP requests.
- **Prisma ORM**: Object-Relational Mapping tool used to interact with the PostgreSQL database in a type-safe manner.
- **PostgreSQL**: The relational database used to store and manage user data, financial records, and other related data.
- **JWT Authentication**: For securing API endpoints and managing user sessions.
- **UUID**: Universally Unique Identifier used as the primary key for all models.

## Models

The backend is designed around a series of models that represent different parts of the financial system. These models are defined in `schema.prisma` and include:

- **User**: Represents the user of the application, including personal information, authentication details, and user role.
- **IncomeRecord**: Stores information about the user's income sources, amounts, and recurrence.
- **ExpenseRecord**: Tracks the user's expenses, including categories, amounts, and payment methods.
- **BudgetRecord**: Manages the user's financial planning by comparing planned vs. actual spending.
- **DebtRecord**: Handles the user's debts, including balances, interest rates, and payments.
- **SavingsRecord**: Keeps track of the user's savings goals and progress.
- **InvestmentRecord**: Stores information about the user's investments, including current value and platform.
- **NetWorthSummary**: Calculates the user's net worth based on assets and liabilities.
- **AgentLog**: Logs interactions with AI agents, including tasks performed and outcomes.
- **AgentFeedback**: Collects user feedback on AI agent performance.
- **Task**: Tracks tasks assigned to AI agents.
- **Report**: Manages reports generated for the user (e.g., budget summaries, debt strategies).
- **ExcelDocument**: Stores paths to generated Excel documents for financial tracking.
- **Goal**: Tracks the user's financial goals, including savings targets and debt reduction.
- **ProgressLog**: Logs progress towards goals and tracks milestones.
- **QualityControl**: Manages quality checks on AI agent tasks.
- **AuditLog**: Logs important actions taken by users for auditing purposes.
- **Preference**: Stores user-specific preferences for the application.
- **APILog**: Logs interactions with external APIs.
- **Reminder**: Manages reminders for the user, including due dates and statuses.

## API Endpoints

The backend exposes a series of API endpoints to interact with the system. Each endpoint is responsible for a specific type of operation (CRUD). These endpoints are secured with JWT authentication and are organized into the following routes:

- **User Routes** (`/api/users`): Handles user creation, updates, authentication, and profile management.

  - `POST /register`: Create a new user
  - `POST /login`: Authenticate a user
  - `GET /profile`: Get the current user's profile
  - `PUT /profile`: Update the current user's profile

- **Financial Routes** (`/api/financial`): Manages income records, expenses, budgets, debts, savings, and investments.

  - `GET /income`: Get all income records for the current user
  - `POST /income`: Add a new income record
  - `PUT /income/:id`: Update an income record
  - `DELETE /income/:id`: Delete an income record
  - (Similar routes exist for expenses, budgets, debts, etc.)

- **Agent Routes** (`/api/agents`): Handles AI agent interactions and feedback.
  - `POST /interact`: Interact with an AI agent
  - `POST /feedback`: Submit feedback for an AI agent

## Authentication

Authentication is handled using JSON Web Tokens (JWT). When a user logs in, they receive a token that is required for accessing protected endpoints. The JWT is verified using middleware that ensures the user is authenticated before performing any operations.

- **JWT Middleware**: Protects routes by requiring a valid token for access.
- **Roles**: Different user roles (e.g., `Admin`, `User`) have different levels of access to resources.

## Database

The backend uses **Prisma ORM** to interact with the **PostgreSQL** database. Prisma allows us to define models in the `schema.prisma` file, which are then mapped to database tables. Prisma also provides a query builder for performing complex operations on the database in a type-safe manner.

- **Migrations**: Use Prisma to manage database migrations. Migrations keep the database schema in sync with the Prisma models.
- **Seeding**: Initial data is seeded into the database using the `seedPrisma.js` script.

## Setup Instructions

### **1. Clone the Repository**

```bash
git clone https://github.com/your-repo/financial-dashboard-backend.git
cd financial-dashboard-backend


```
