# 💼 SmartPocket – AI-Powered Student Digital Wallet + Financial Coach

## 🎯 Problem Statement

Students and young professionals often face financial challenges:

- Overspending without realizing it  
- Lack of expense tracking  
- No savings discipline  
- Using mobile wallets like JazzCash or EasyPaisa without smart insights  
- Difficulty understanding where their money goes  

In countries like Pakistan, this is a very common problem. Current digital wallets focus only on money transfer, missing the **behavioral insights and financial guidance** that users need.

---

## 💡 Solution Overview

**SmartPocket** is a **Digital Wallet + AI Financial Coach** designed for students and young professionals.

> “Your AI Money Mentor inside your wallet”

**Key Benefits:**

- Tracks spending and categorizes expenses automatically  
- Provides AI-powered insights and suggestions  
- Helps users set and achieve savings goals  
- Simulates secure transactions with alerts for suspicious activity  

---

## 🏗 MVP Feature Set (Hackathon Version)

### 1️⃣ Authentication System
- Email / Phone login (JWT)  
- Role: User  
- Profile dashboard  

### 2️⃣ Digital Wallet System
- Add balance (dummy)  
- Send money to another user  
- Transaction history  
- QR code payment simulation  

### 3️⃣ Smart Expense Tracker (Auto Categorization)
- System auto-categorizes expenses:
  - Food 🍔
  - Transport 🚕
  - Shopping 🛍
  - Bills 💡
  - Education 📚  
- Simple AI logic or OpenAI API integration  

### 4️⃣ AI Financial Insights
- Total spending and category breakdown (Pie Chart)  
- Daily average spending  
- AI suggestions like:
  - “You spent 35% more on food this month.”  
  - “Reduce food spending by 20% to save 4,000 PKR.”  

### 5️⃣ Smart Saving Goal Feature
- Set goals (e.g., Buy Laptop – 150,000 PKR)  
- Monthly saving requirement calculation  
- Progress bar and achievement badges  

### 6️⃣ Fraud Alert Simulation
- Alerts for large or rapid transactions  
- “Suspicious Activity Detected” notifications  

---

## 🖥 UI Strategy
- Modern fintech dashboard  
- Dark mode support  
- Charts (Recharts) for insights  
- Minimalistic and animated balance display  

---

## 🧱 Tech Stack

**Frontend:**
- React + Vite  
- Tailwind CSS  
- Axios  
- Context API / Redux Toolkit  

**Backend:**
- Node.js + Express  
- MongoDB + Mongoose  
- JWT Authentication  
- Transaction-safe logic  

**Optional AI:**
- OpenAI API or rule-based AI simulation  

---

## 🚀 Architecture Overview
**Collections:**
- Users  
- Wallet  
- Transactions  
- Goals  
- Alerts  

**Important Notes:**
- Atomic transactions for wallet updates  
- Password hashing & input validation  
- Prevent negative balances  

---

## 📈 Future Enhancements
- Split bills feature (like Splitwise)  
- Premium AI insights  
- Partnering with banks or merchants  
- API for small businesses  

---

## 🛠 Setup Instructions

1. **Clone the repository**
```bash
git clone <repo-url>
cd smartpocket
