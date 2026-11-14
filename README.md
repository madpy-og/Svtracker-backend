# Svtracker - Backend API

Backend RESTful API for Svtracker (Expense Tracker application), built with Express.js, MongoDB (Mongoose), and JWT authentication.

## Features
- User Authentication (JWT)
- Income & Expense Management
- Category & Source Management
- Dashboard & Financial Summaries
- Image Upload with Cloudinary

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (jsonwebtoken) & bcryptjs
- **File Upload:** Cloudinary & Multer

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or MongoDB Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/madpy-og/Svtracker-backend.git
   cd Svtracker-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Copy `.env.example` to `.env` and fill in your credentials:
   ```bash
   cp .env.example .env
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
