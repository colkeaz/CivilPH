# CEguradista (CivilPH)

**CEguradista** is a professional service marketplace designed to connect Philippine homeowners and small contractors with licensed Civil and Structural Engineers. Our mission is to make professional structural consultation accessible, affordable, convenient, and safe.

## 🌟 Purpose
In the Philippines, many residential structures are built without proper engineering validation due to cost or lack of access to licensed professionals. CEguradista bridges this gap by providing a secure platform for structural assessments, design reviews, and expert consultations, ensuring that every Filipino home is "Seguradista" (Safe and Secure).

## 🚀 Core Features

### For Homeowners & Contractors
- **Engineer Directory**: Browse and filter a network of verified Civil/Structural Engineers by region, city, and specialization.
- **Easy Booking**: Schedule on-site inspections or online consultations through an interactive calendar system.
- **Secure Payments**: Integrated payment gateway supporting GCash, Credit/Debit Cards, and QRPH (via PayMongo).
- **Digital Reports Portal**: Access, download, and track structural assessment reports and engineer recommendations in a central dashboard.

### For Licensed Engineers
- **Professional Profiles**: Showcase credentials, PRC license verification, years of experience, and service rates.
- **PRC Verification**: A dedicated admin workflow to verify professional licenses, building trust with clients.
- **Consultation Management**: Track appointments, manage schedules, and upload digital assessment reports.
- **Rating System**: Build a professional reputation through verified client reviews and ratings.

## 🛠️ Tech Stack
- **Frontend**: React 18, TypeScript, Vite, React Router 7.
- **Backend**: Node.js, Express.js, JWT Authentication.
- **Database**: MariaDB (Relational).
- **Styling**: Vanilla CSS with a Midnight-Blue & Cyan-Teal design system.

## 🏃 How to Run the Program

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/colkeaz/CivilPH.git
cd CivilPH
```

### 2. Setup the Backend
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory:
```env
PORT=5000
JWT_SECRET=your_secret_key_here
# Database config (Optional for mock mode)
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=civilph
```
Run the server:
```bash
node server.js
```

### 3. Setup the Frontend
Open a new terminal in the root directory:
```bash
npm install
npm run dev
```
The application will be available at `http://localhost:5173/`.

### 4. Database Setup (MariaDB)
The database schema is provided in `server/schema.sql`. You can import this into your MariaDB instance to set up the necessary tables.

---
Developed by **CivilPH** - *Engaging professional engineering for a safer Philippines.*
