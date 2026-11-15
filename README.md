## Svtracker

**Svtracker** is a modern personal finance management tool designed to help users track their spending habits through an intuitive, data-driven dashboard. It transforms raw financial data into meaningful visual insights using interactive charts and real-time summaries.

🌐 **Live Demo:** [https://svtracker.maddaathia.my.id](https://svtracker.maddaathia.my.id)  
🔗 **API Endpoint:** [https://api.svtracker.maddaathia.my.id](https://api.svtracker.maddaathia.my.id)

---

## Repositories
- **Frontend Repository:** [madpy-og/Svtracker](https://github.com/madpy-og/Svtracker)
- **Backend Repository:** [madpy-og/Svtracker-backend](https://github.com/madpy-og/Svtracker-backend)

---

## Tech Stack

### Languages, Frameworks & Tools
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,ts,vite,react,tailwind,nodejs,express,mongodb&theme=dark" />
  </a>
</p>

---

## Getting Started (Backend)

### Prerequisites
- Node.js (v20+) or Docker & Docker Compose
- MongoDB (Atlas instance or local MongoDB)

### Option 1: Deploy with Docker (Recommended for VPS)
1. Clone the repository:
   ```bash
   git clone https://github.com/madpy-og/Svtracker-backend.git
   cd Svtracker-backend
   ```
2. Setup environment variables:
   ```bash
   cp .env.example .env
   nano .env
   ```
3. Run container:
   ```bash
   docker compose up -d --build
   ```

### Option 2: Run Locally (Non-Docker)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Setup environment variables:
   ```bash
   cp .env.example .env
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
