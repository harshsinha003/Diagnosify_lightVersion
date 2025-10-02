# 🚀 Simple Deployment Guide - Disease Prediction System

A clean, simple disease prediction app with just **Home**, **Prediction**, and **About** pages.

## 📋 What You Have

- **Frontend**: React app with symptom checker and disease prediction
- **Python API**: Flask server with ML model for disease prediction  
- **Backend**: Optional simple Express server (you might not need this)

## 🔧 Project Structure

```
Disease-Prediction-and-Medicine-Recommendation/
├── Frontend/              # React app → Deploy to Vercel
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx      # Landing page
│   │   │   ├── Prediction.jsx # Main symptom checker
│   │   │   └── About.jsx     # About page
│   │   └── components/
│   ├── package.json
│   └── vercel.json
├── Python/                # ML API → Deploy to Render
│   ├── PredictBack.py     # Flask API with ML model
│   ├── requirements.txt   # Python dependencies
│   ├── Procfile          # Render deployment config
│   └── ExcelSheets/      # Training data
└── Backend/               # Optional → Skip or deploy to Render
    ├── server.js          # Simple Express server
    └── package.json
```

## 🎯 Deployment Options

### **Option 1: Frontend + Python Only (Recommended)**
- **Frontend** → Vercel  
- **Python API** → Render
- **Skip Backend** (not needed for simple app)

### **Option 2: All Three Services**
- **Frontend** → Vercel
- **Python API** → Render  
- **Backend** → Render (if you want to keep it)

## 📝 Deployment Steps

### **Step 1: Deploy Python API to Render**

1. Go to [Render.com](https://render.com) → New Web Service
2. Connect your GitHub repo
3. Configure:
   - **Name**: `disease-prediction-api`
   - **Root Directory**: `Python`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn PredictBack:app`
4. Add environment variable:
   - `FLASK_ENV=production`
5. Deploy and save the URL (e.g., `https://your-api.onrender.com`)

### **Step 2: Deploy Frontend to Vercel**

1. Go to [Vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Configure:
   - **Framework**: Vite
   - **Root Directory**: `Frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variable:
   - `VITE_PYTHON_API_URL=https://your-api.onrender.com`
5. Deploy and save the URL (e.g., `https://your-app.vercel.app`)

### **Step 3: Update CORS (Important!)**

After both deployments, update the Python API CORS settings:

1. In `Python/PredictBack.py`, update the CORS origins:
```python
# Replace with your actual Vercel URL
CORS(app, resources={r"/api/*": {"origins": [
    "https://your-app.vercel.app",
    "http://localhost:5173"  # Keep for local development
]}})
```

2. Redeploy the Python service on Render

## 🧪 Testing Your Deployment

1. Visit your Vercel app URL
2. Go to the Prediction page
3. Select some symptoms
4. Click "Get Prediction"
5. Verify you get results with disease info, medications, diet, and workout suggestions

## ⚡ Quick Start Commands

```bash
# Run locally for testing
cd Frontend
npm install
npm run dev    # Frontend on http://localhost:5173

cd ../Python  
pip install -r requirements.txt
python PredictBack.py  # Python API on http://localhost:2000
```

## 🔑 Environment Variables

### **For Render (Python API)**
```
FLASK_ENV=production
```

### **For Vercel (Frontend)**  
```
VITE_PYTHON_API_URL=https://your-python-api.onrender.com
```

## 📋 Pre-Deployment Checklist

- [ ] Remove unnecessary frontend folders (Frontend_New, Frontend_Temp, etc.)
- [ ] Test symptom selection and prediction locally
- [ ] Verify Python API returns disease info with medications/diet/workout
- [ ] Update CORS settings after deployment
- [ ] Test the complete flow on production

## 🎉 You're Done!

Your simple disease prediction app should now be live with:
- Clean, modern UI for symptom selection
- AI-powered disease prediction  
- Treatment recommendations (medications, diet, exercise)
- Responsive design that works on all devices

---

**Note**: You can skip the Backend service entirely since your frontend connects directly to the Python API. The Backend was only needed for the complex user/doctor management features you removed.