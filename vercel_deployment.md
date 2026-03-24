# Vercel Deployment Guide (Team Requirements Focus)

This guide covers deploying your Full-Stack Monorepo application to Vercel, specifically tailored to address the **Team Requirements** of Sprint 4 (T.1: Monorepo & Express Initialization, T.2: SQL Database, T.3: Prisma ORM, and T.4: CORS).

---

## Step 1: Initialize Vercel Projects for the Monorepo (Addresses T.1)
Since the application uses a Monorepository pattern featuring NPM Workspaces (`apps/frontend` and `apps/backend`), we will set up two separate Vercel projects pointing to the same Git repository.

### 1a. Deploy the Back-End Application
1. In the Vercel Dashboard, select **Add New > Project**.
2. Click **Import Git Repository** and select your project's repository.
3. In the project settings, configure the **Root Directory**:
   - Set the app root directory to `apps/backend`.
   - **Enable**: "Include files outside the root directory in the Build Step".
   - **Enable**: "Skip Deployments when there are no changes to the root directory or its dependencies".

### 1b. Deploy the Front-End Application
1. Create another new project in Vercel and import the exact same Git Repository.
2. In the deployment settings, rename the project to signify it is the Front-End.
3. Configure the **Root Directory**:
   - Set the app root directory to `apps/frontend`.
   - **Enable**: "Include files outside the root directory in the Build Step".
   - **Enable**: "Skip Deployments when there are no changes to the root directory or its dependencies".
4. Under "Build and Output Settings", override the **Install Command** to:
   ```bash
   cd ../.. && npm install
   ```
*(Note: At this stage, the applications will not build successfully until Database and CORS configs are complete).*

---

## Step 2: Set up the Production PostgreSQL Database (Addresses T.2)
Development relies on a local SQL-derived database, but production relies on a cloud equivalent. Vercel integrates cleanly with Neon PostgreSQL.

1. Navigate to the **Storage** tab in your Vercel dashboard.
2. Click **Create Database > Neon**.
3. Provide a database name (e.g., `COMP-4002-db`) and click **Install**.
   - **Important**: Choose your **back-end application** project for integration.
   - Uncheck the *Development* and *Preview* environments.
4. By installing this, Vercel automatically maps the necessary `DATABASE_URL` environment variables to your back-end project.

---

## Step 3: Configure Back-End for Vercel, Prisma, and CORS (Addresses T.3 & T.4)
Your back-end Node.js Express application uses Prisma for its schema and standard middleware for CORS. Vercel requires some explicit instructions to serve Express and run Prisma properly during build time.

### 3a. Adapt Express for Vercel Serverless Functions
Vercel looks for an `api/index.ts` file to run back-end code as a serverless function.
1. Create a new file in your local repository: `apps/backend/api/index.ts`.
2. Add the following to export your Express app:
   ```typescript
   import app from "../src/app"
   export default app;
   ```

### 3b. Configure Prisma Deployment Scripts
Prisma requires generating the client (`T.3`) and applying migrations to the newly created Neon DB upon deployment.
1. Open `apps/backend/package.json`.
2. Update/add the following scripts:
   ```json
   "scripts": {
     "vercel-build": "prisma migrate deploy && prisma db seed && npm run build",
     "postinstall": "prisma generate"
   }
   ```

### 3c. Project Linking and Rewrites (`vercel.json`)
1. Obtain the **Project ID** of your Front-End application from its Vercel settings.
2. Create or edit `apps/backend/vercel.json` locally and add:
   ```json
   {
      "relatedProjects": ["<front-end-project-id>"],
      "rewrites": [
         {
            "source": "/(.*)",
            "destination": "/api"
         }
      ]
   }
   ```

### 3d. Update Vercel Settings (Build & Environment Variables)
1. Go to your **Back-End App Settings** in Vercel.
2. Under **Build and Development Settings**:
   - Set **Build Command** to: `npm run vercel-build`
   - Set **Install Command** to: `cd ../.. && npm install`
3. Under **Environment Variables**, configure the CORS rules (`T.4`) by supplying the frontend URL:
   - Add `FRONTEND_URL` and set its value to your newly deployed Vercel Front-End URL (e.g., `https://your-frontend-app.vercel.app`).
   - Add `PORT` and set its value to `3000`.

---

## Step 4: Finalize the Front-End Deployment 
The front-end needs to know where the back-end serves requests.

1. Obtain the **Project ID** of your Back-End application from its Vercel settings.
2. Create or edit `apps/frontend/vercel.json` locally:
   ```json
   {
      "relatedProjects": ["<back-end-project-id>"],
      "git": {
        "deploymentEnabled": {
            "*": false,
            "main": true
        }
      }
   }
   ```
3. Go to your **Front-End App Settings** in Vercel.
4. Under **Environment Variables**, link it to the back-end:
   - Add `VITE_API_BASE_URL` and set its value to your Vercel Back-End URL (e.g., `https://your-backend-app.vercel.app`).
5. Push your local codebase changes (`api/index.ts`, `package.json` scripts, `vercel.json` files) to your `main` git branch to trigger the finalized Vercel deployment. 

Your front-end and back-end are now completely hooked up in production adhering to the Team Requirements!
