const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-name.onrender.com'  // Replace with your actual Render backend URL
  : 'http://localhost:5000';

const ML_API_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-ml-api-name.onrender.com'   // Replace with your actual Render ML API URL  
  : 'http://localhost:8000';

export { API_BASE_URL, ML_API_URL };