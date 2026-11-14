# Svtracker - Backend API

Backend RESTful API for Svtracker (Expense Tracker application), built with Express.js, MongoDB (Mongoose), and JWT authentication.

## Tech Stack
- **Runtime:** Node.js (v20+)
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Containerization:** Docker & Docker Compose
- **Authentication:** JSON Web Tokens (jsonwebtoken) & bcryptjs
- **File Upload:** Cloudinary & Multer

---

## Deploy Menggunakan Docker (VPS)

### 1. Prasyarat di VPS
Pastikan VPS sudah terinstall **Docker** dan **Docker Compose plugin**:
```bash
# Ubuntu / Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

### 2. Clone Repository & Setup Environment
```bash
git clone https://github.com/madpy-og/Svtracker-backend.git
cd Svtracker-backend

# Buat file .env dari template
cp .env.example .env
nano .env # sesuaikan variabel MONGO_URI, SECRET_KEY, CLIENT_URL, dll.
```

### 3. Build & Jalankan Container
```bash
# Jalankan container di background
docker compose up -d --build

# Cek status container
docker compose ps

# Cek log aplikasi
docker compose logs -f backend
```

### 4. Health Check
Kamu bisa memverifikasi status backend dengan curl:
```bash
curl http://localhost:3000/health
# Response: {"status":"ok","uptime":...}
```

---

## Menjalankan Secara Lokal (Non-Docker)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Salin template konfigurasi:
   ```bash
   cp .env.example .env
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
