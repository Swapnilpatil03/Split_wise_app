# 🧾 Split App – Expense Sharing Platform

This is a fullstack expense-splitting web app, inspired by Splitwise, built using Node.js, Express, MongoDB, and Bootstrap frontend.

Live URL 👉 [https://split-wise-app.onrender.com/](https://split-wise-app.onrender.com/) 

---

## 📦 Features

- 💸 Add shared expenses with categories
- 👥 Involve multiple people in a transaction
- 📊 View net balances for each person
- 🔄 Auto-calculate settlements (who pays whom)
- 🎨 Clean UI using Bootstrap 5
- 📡 Deployed using Render (single fullstack deployment)

---

## 🚀 Live Demo

- **Dashboard:** `/`
- **Add Expense:** `/add-expense.html`
- **API Endpoints:**
  - `GET /expenses`
  - `POST /expenses`
  - `GET /balances`
  - `GET /settlements`
  - `GET /people`

---

## 📬 Postman Collection

Click to open and test all API routes:  
👉 [Postman Collection (Public)](https://swapnil-4477190.postman.co/workspace/Swapnil's-Workspace~279d3537-d925-4dd6-8482-cc3320b73181/collection/45766117-b10d32b2-ce05-47cb-ad8f-afec5624e437?action=share&creator=45766117)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, Mongoose
- **Frontend:** HTML, Bootstrap 5, Vanilla JS
- **Database:** MongoDB Atlas
- **Deployment:** Render (Single service – frontend & backend)

---

## 🧰 Project Structure

```
split-app/
├── public/
│   ├── index.html
│   ├── add-expense.html
│   ├── script.js
├── models/
├── routes/
├── controllers/
├── app.js
├── server.js
├── package.json
```

---

## 📌 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/split-app.git
cd split-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add `.env` file
```
MONGO_URI=your-mongodb-uri
```

### 4. Run locally
```bash
node server.js
```
Visit: [http://localhost:5000](http://localhost:5000)

---

## ✍️ Author
**Swapnil Patil** – Final Year BE Student, VIT Pune

---



---
