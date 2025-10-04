# 🏥 Diagnosify - AI Disease Prediction System

A clean, simple disease prediction application that uses machine learning to analyze symptoms and provide health insights with treatment recommendations.

## 🌟 Features

- **🤖 AI-Powered Disease Prediction**: Advanced ML model trained on medical data
- **💊 Medicine Recommendations**: Personalized medication suggestions  
- **🥗 Diet Plans**: Customized dietary recommendations
- **🏃‍♂️ Workout Routines**: Tailored exercise programs
- **� Responsive Design**: Clean, modern interface that works on all devices
- **⚡ Simple & Fast**: No complex authentication - just predict and get results

## 🛠️ Technology Stack

### Frontend
- **React.js** - User interface
- **Vite** - Build tool  
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Machine Learning API
- **Python Flask** - ML API server
- **Scikit-learn** - ML algorithms
- **Pandas** - Data processing
- **RandomForest/SVM** - Prediction models

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RishabhRaj43/Full-Stack-Disease-Prediction-and-Medicine-Recommendation.git
   cd Disease-Prediction-and-Medicine-Recommendation
   ```

2. **Setup Python API**
   ```bash
   cd Python
   pip install -r requirements.txt
   python PredictBack.py
   ```

3. **Setup Frontend**
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

### Access the Application
- **Frontend**: http://localhost:5173
- **Python ML API**: http://localhost:2000

## 📁 Project Structure

```
├── Frontend/              # React application  
│   ├── src/
│   │   ├── pages/        # Home, Prediction, About pages
│   │   └── components/   # Reusable UI components
│   ├── package.json
│   └── vercel.json       # Deployment config
├── Python/               # ML API server
│   ├── ExcelSheets/      # Training data
│   ├── PredictBack.py    # Flask API
│   ├── requirements.txt  # Python dependencies
│   └── Procfile         # Deployment config  
├── SIMPLE_DEPLOYMENT.md  # Deployment guide
└── README.md            # This file
```

## 🚀 Deployment

This application is configured for easy deployment on:
- **Frontend**: Vercel
- **Backend**: Render
- **Python API**: Render
- **Database**: MongoDB Atlas

See [SIMPLE_DEPLOYMENT.md](./SIMPLE_DEPLOYMENT.md) for detailed deployment instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: [Harshvardhan Sinha](https://github.com/harshsinha003)

## 🙏 Acknowledgments

- Medical datasets for model training
- Open source community for tools and libraries
- Healthcare professionals for domain expertise

---

**⭐ Star this repository if you find it helpful!**
