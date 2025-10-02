# 🚀 Disease Prediction App - Deployment Guide

## 📋 Project Structure
```
Disease-Prediction-App/
├── Frontend/          # React + Vite App (Deploy to Vercel)
├── Backend/           # Express.js API (Deploy to Render)  
├── Python/            # Flask ML API (Deploy to Render)
└── README.md
```

## 🔧 Pre-Deployment Setup

### 1. Clean Up Project (Optional)
```powershell
# Delete unnecessary frontend folders
rmdir /s "Frontend\Frontend_For_MedGuide_User"
rmdir /s "Frontend_Temp"
```

### 2. Reset Git History (Run the script)
```powershell
# Run the provided script
.\RESET_GIT_HISTORY.bat

# Then add your GitHub repository
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## 🌐 Frontend Deployment (Vercel)

### Step 1: Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"

### Step 2: Import Repository
1. Import your GitHub repository
2. **IMPORTANT**: Set Root Directory to `Frontend`
3. Framework Preset: Vite
4. Build Command: `npm run build`
5. Output Directory: `dist`

### Step 3: Environment Variables
```
# No environment variables needed for frontend
```

### Step 4: Deploy
- Click "Deploy"
- Your app will be live at: `https://your-app-name.vercel.app`

---

## 🖥️ Backend Deployment (Render)

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"

### Step 2: Deploy Express Backend
1. Connect your GitHub repository
2. **IMPORTANT**: Set Root Directory to `Backend`
3. **Settings:**
   ```
   Name: disease-prediction-backend
   Environment: Node
   Build Command: npm install
   Start Command: node server.js
   ```

### Step 3: Environment Variables
```
PORT=10000
```

### Step 4: Deploy Python API
1. Create another "Web Service"
2. **IMPORTANT**: Set Root Directory to `Python`
3. **Settings:**
   ```
   Name: disease-prediction-ml-api
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: python PredictBack.py
   ```

---

## 🔗 Connect Frontend to Backend

### Update API URLs in Frontend
In `Frontend/src/services/api.js` (create if doesn't exist):
```javascript
const API_BASE_URL = 'https://your-backend-name.onrender.com';
const ML_API_URL = 'https://your-ml-api-name.onrender.com';

export { API_BASE_URL, ML_API_URL };
```

---

## 📝 Required Files for Deployment

### Backend/package.json
```json
{
  "name": "disease-prediction-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

### Python/requirements.txt
```
Flask==2.3.3
Flask-CORS==4.0.0
pandas==2.0.3
numpy==1.24.3
scikit-learn==1.3.0
```

---

## 🧪 Testing Deployment

### 1. Test Frontend
- Visit your Vercel URL
- Check all pages load correctly
- Test navigation

### 2. Test Backend APIs
```bash
# Health check
curl https://your-backend.onrender.com/health

# ML API test
curl -X POST https://your-ml-api.onrender.com/predict \
  -H "Content-Type: application/json" \
  -d '{"symptoms": ["fever", "cough"]}'
```

---

## 🔧 Common Issues & Solutions

### Issue: Render Cold Starts
**Problem**: First request takes 30+ seconds
**Solution**: Use Render's paid plan or implement a keep-alive service

### Issue: CORS Errors
**Problem**: Frontend can't connect to backend
**Solution**: Add your Vercel URL to CORS whitelist in backend

### Issue: Build Failures
**Problem**: Deployment fails during build
**Solution**: Check Node.js/Python versions match local environment

---

## 📱 Final URLs Structure

```
Frontend (Vercel):  https://disease-prediction-app.vercel.app
Backend (Render):   https://disease-prediction-backend.onrender.com  
ML API (Render):    https://disease-prediction-ml-api.onrender.com
```

---

## ✅ Deployment Checklist

- [ ] Clean up unnecessary folders
- [ ] Reset git history 
- [ ] Push to new GitHub repository
- [ ] Deploy frontend to Vercel (Root: Frontend)
- [ ] Deploy backend to Render (Root: Backend)  
- [ ] Deploy ML API to Render (Root: Python)
- [ ] Update API URLs in frontend
- [ ] Test all functionality
- [ ] Update README with live URLs

## 🎉 You're Done!

Your disease prediction app is now live and accessible worldwide!