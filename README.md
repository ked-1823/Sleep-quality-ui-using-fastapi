# 💤 Sleep Quality Predictor – Full Stack ML Deployment

A production-style Machine Learning web application that predicts a user's **Sleep Quality Score** based on lifestyle and health parameters.

This project demonstrates end-to-end ML system design:
- Data preprocessing
- Model training
- API development using FastAPI
- Frontend development using HTML/CSS/JS
- Public deployment using GitHub Pages and Render

---

## 🌐 Live Application

### 🔗 Frontend (GitHub Pages)
https://ked-1823.github.io/Sleep-quality-ui-using-fastapi/

### 🔗 Backend API (FastAPI on Render)
https://sleep-quality-score-fast-api.onrender.com/docs

> ⚠️ Note: The backend is deployed on Render free tier.  
> If inactive, the first request may take 20–30 seconds to wake up.

---

## 📌 Project Overview

Sleep quality is influenced by multiple factors including stress, physical activity, BMI, heart rate, and blood pressure.

This application:
1. Collects user health & lifestyle data via web form.
2. Sends data as JSON to a FastAPI backend.
3. Backend processes input using a trained ML model.
4. Returns predicted sleep quality score.
5. Displays result dynamically on the UI.

This replicates a real-world ML deployment workflow.

---

## 🧠 Model Input Features

The prediction is based on the following features:

- Gender
- Age
- Occupation
- Sleep Duration (hours)
- Physical Activity Level
- Stress Level (1–10)
- BMI Category (Normal / Overweight / Obese)
- Heart Rate (bpm)
- Daily Steps
- Systolic Blood Pressure
- Diastolic Blood Pressure

---

## ⚙️ How It Works (Technical Flow)

```
User Input (Form)
        ↓
JavaScript collects data
        ↓
POST Request (Fetch API)
        ↓
FastAPI Backend (/predict)
        ↓
Preprocessing + ML Model Prediction
        ↓
JSON Response
        ↓
Display Score on UI
```

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Flexbox + Responsive Media Queries)
- Vanilla JavaScript (Async/Await + Fetch API)

### Backend (Separate Repository)
- FastAPI
- Scikit-learn
- Pandas
- Joblib
- Uvicorn

### Deployment
- GitHub Pages (Frontend Hosting)
- Render (Backend Hosting)

---

## 📁 Frontend Project Structure

```
Sleep-quality-ui-using-fastapi/
│
├── index.html
├── script.js
└── README.md
```

---

## 🎨 UI Highlights

- Fully responsive design (mobile optimized)
- Modern gradient background
- Clean form layout
- Button disabled during API call (prevents duplicate requests)
- Proper error handling
- Dynamic prediction display without page reload

---

## 🔍 API Integration

Frontend sends POST request to:

```
https://sleep-quality-score-fast-api.onrender.com/predict
```

Example request payload:

```json
{
  "Gender": "Male",
  "Age": 25,
  "Occupation": "Engineer",
  "Sleep_Duration": 6.5,
  "Physical_Activity_Level": 70,
  "Stress_Level": 5,
  "BMI_Category": "Normal",
  "Heart_Rate": 72,
  "Daily_Steps": 8000,
  "Systolic_BP": 120,
  "Diastolic_BP": 80
}
```

Example response:

```json
{
  "predicted_sleep_quality": 6.22
}
```

---

## 🚀 How To Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/ked-1823/Sleep-quality-ui-using-fastapi.git
   ```

2. Open `index.html` in your browser  
   OR  
   Use VS Code Live Server extension.

> Make sure backend API is running locally if not using deployed version.

---

## 📈 What This Project Demonstrates

- End-to-end ML model deployment
- REST API consumption
- Handling asynchronous operations in JavaScript
- Cross-Origin API communication
- Frontend–Backend integration
- Production-style ML architecture

This is not just a model notebook — it is a deployable ML system.

---

## 🧩 Future Improvements

- Add prediction confidence score
- Add input range validation
- Add loading spinner
- Add model explanation (SHAP values)
- Add user authentication
- Store predictions in database

---


## 📜 License

This project is for educational and portfolio purposes.
