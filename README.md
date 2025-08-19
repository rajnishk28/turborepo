# Turborepo Monorepo Setup & Run Guide

This project is a **monorepo** built using [Turborepo](https://turbo.build/repo) and managed with [pnpm](https://pnpm.io/).

Follow the steps below to clone, install, configure, and run the project locally.

---

## 📦 Prerequisites

- **Node.js** v20 or later installed → [Download Node.js](https://nodejs.org/)
- **pnpm** package manager installed globally

```bash
npm install -g pnpm

🚀 Setup Instructions
1️⃣ Clone the Repository

git clone https://github.com/rajnishk28/turborepo.git

cd turborepo

### 2️⃣ Install Dependencies

Run the following command at the root of the project to install all required packages:

pnpm install

### 3️⃣ Setup Environment Variables

Go to the **web** folder and create a new file named **.env.local**.  
Open the existing **.env.sample** file, copy all of its content, and paste it inside **.env.local**.  

Then, update the values in **.env.local** according to your local configuration.


4️⃣ Run the Web Application

Start the web application in development mode:

pnpm --filter web dev