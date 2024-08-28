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

1. Authentication
   POST /auth/register
   POST /auth/login
   POST /auth/logout
   POST /auth/refresh-token
   POST /auth/forgot-password
   POST /auth/reset-password
   GET /auth/verify-email
   GET /auth/me
   POST /auth/change-password
   GET /auth/roles
   POST /auth/assign-role
   POST /auth/revoke-role
   POST /auth/verify-token
2. User Management
   GET /users
   GET /users/
   POST /users
   PUT /users/
   DELETE /users/
   PATCH /users/
   /status
   GET /users/me
   PATCH /users/me
   POST /users/search
   POST /users/bulk-create
   POST /users/
   /role
   POST /users/
   /revoke-role
   GET /users/roles
   GET /users/activity/
   POST /users/
   /notifications
   GET /users/
   /notifications
3. Financial Data
   GET /financial/accounts
   GET /financial/accounts/
   POST /financial/accounts
   PUT /financial/accounts/
   DELETE /financial/accounts/
   GET /financial/transactions
   GET /financial/transactions/
   POST /financial/transactions
   PUT /financial/transactions/
   DELETE /financial/transactions/
   GET /financial/budgets
   GET /financial/budgets/
   POST /financial/budgets
   PUT /financial/budgets/
   DELETE /financial/budgets/
   GET /financial/categories
   POST /financial/categories
   PUT /financial/categories/
   DELETE /financial/categories/
   GET /financial/reports
   POST /financial/reports
   GET /financial/goals
   POST /financial/goals
   PUT /financial/goals/
   DELETE /financial/goals/
   GET /financial/investments
   POST /financial/investments
   PUT /financial/investments/
   DELETE /financial/investments/
4. Image Management
   POST /images/upload
   GET /images
   GET /images/
   DELETE /images/
   PUT /images/
   /metadata
   POST /images/
   /share
   POST /images/
   /resize
   POST /images/
   /compress
   POST /images/
   /convert
   GET /images/
   /download
   POST /images/
   /annotate
   GET /images/
   /metadata
   POST /images/
   /crop
   GET /images/tags
   GET /images/tag/
5. Analytics & Reports
   GET /analytics/summary
   POST /analytics/custom-report
   GET /analytics/datasets
   POST /analytics/datasets
   GET /analytics/datasets/
   PUT /analytics/datasets/
   DELETE /analytics/datasets/
   GET /analytics/metrics
   POST /analytics/aggregate
   POST /analytics/visualize
   GET /analytics/reports
   GET /analytics/reports/
   POST /analytics/reports
   DELETE /analytics/reports/
   POST /analytics/reports/export
   GET /analytics/tags
6. Environment Management
   GET /environments
   GET /environments/
   POST /environments
   PUT /environments/
   DELETE /environments/
   POST /environments/
   /deploy
   GET /environments/
   /logs
   POST /environments/
   /reset
   POST /environments/
   /switch
   GET /environments/variables/
   POST /environments/variables/
   DELETE /environments/variables/
   POST /environments/
   /backup
   POST /environments/
   /restore
7. Notifications & Alerts
   GET /notifications
   GET /notifications/
   POST /notifications
   PUT /notifications/
   DELETE /notifications/
   POST /notifications/
   /read
   POST /notifications/
   /unread
   GET /notifications/types
   GET /alerts
   POST /alerts
   PUT /alerts/
   DELETE /alerts/
   POST /alerts/
   /resolve
   GET /alerts/active
   POST /alerts/bulk-resolve
8. Project Management
   GET /projects
   GET /projects/
   POST /projects
   PUT /projects/
   DELETE /projects/
   GET /projects/
   /milestones
   POST /projects/
   /milestones
   PUT /projects/
   /milestones/
   DELETE /projects/
   /milestones/
   GET /projects/
   /tasks
   POST /projects/
   /tasks
   PUT /projects/
   /tasks/
   DELETE /projects/
   /tasks/
   GET /projects/tags
   POST /projects/
   /assign
   POST /projects/
   /unassign
9. Settings & Configurations
   GET /settings
   GET /settings/
   PUT /settings/
   POST /settings
   DELETE /settings/
   GET /settings/categories
   PUT /settings/category/
   GET /settings/preferences
   PUT /settings/preferences
   GET /settings/notifications
   PUT /settings/notifications
   POST /settings/reset
10. User Permissions
    GET /permissions/roles
    POST /permissions/roles
    GET /permissions/roles/
    PUT /permissions/roles/
    DELETE /permissions/roles/
    GET /permissions/roles/
    /users
    POST /permissions/roles/
    /assign
    POST /permissions/roles/
    /revoke
    GET /permissions/users/
    /roles
    GET /permissions/capabilities
    POST /permissions/roles/
    /capabilities
    DELETE /permissions/roles/
    /capabilities
    GET /permissions/audit-log
    GET /permissions/requests
    POST /permissions/requests/
    /approve
    POST /permissions/requests/
    /deny
11. Mock Data
    GET /mock-data
    GET /mock-data/
    POST /mock-data
    PUT /mock-data/
    DELETE /mock-data/
    POST /mock-data/test
    GET /mock-data/schemas
    POST /mock-data/generate
    POST /mock-data/
    /clone
12. Version Control
    GET /versions
    GET /versions/
    POST /versions
    PUT /versions/
    DELETE /versions/
    GET /versions/
    /schemas
    POST /versions/
    /schemas/migrate
    POST /versions/
    /rollback
    GET /versions/changelog
    GET /migrations
    POST /migrations
    GET /migrations/
    POST /migrations/
    /apply
    POST /migrations/
    /revert
    POST /migrations/rollback
    GET /migrations/log
13. Content Management
    GET /content
    GET /content/
    POST /content
    PUT /content/
    DELETE /content/
    POST /content/
    /publish
    POST /content/
    /unpublish
    GET /content/tags
    GET /content/authors
    POST /content/upload
    GET /content/media
    GET /content/media/
    DELETE /content/media/
    GET /content/comments
    POST /content/comments
    DELETE /content/comments/
    GET /content/revisions/
    POST /content/revisions/
    /restore
14. Database Queries
    POST /db/query
    POST /db/batch-query
    GET /db/tables
    GET /db/tables/
    POST /db/tables/
    /data
    PUT /db/tables/
    /data/
    DELETE /db/tables/
    /data/
    POST /db/import
    GET /db/backups
    POST /db/backups
    POST /db/restore
    GET /db/logs
    POST /db/transactions
    GET /db/schema
15. External Service Integration
    GET /external-services
    POST /external-services
    GET /external-services/
    PUT /external-services/
    DELETE /external-services/
    POST /external-services/
    /test
    POST /external-services/
    /execute
    GET /external-services/logs
    POST /external-services/webhooks
    DELETE /external-services/webhooks/
    GET /external-services/usage
    POST /external-services/
    /sync
16. Testing & Debugging
    POST /testing/run-test
    POST /testing/run-test-suite
    GET /testing/test-results
    POST /debugging/logs
    POST /debugging/error-reports
    POST /testing/generate-mock-responses
    GET /testing/coverage
    POST /debugging/snapshots
    GET /debugging/snapshots/
    POST /testing/schedule-tests
    POST /debugging/toggle-logging
    GET /debugging/environment
    POST /debugging/clear-cache
    POST /debugging/simulate-error
    GET /testing/reports
    GET /debugging/memory-usage
