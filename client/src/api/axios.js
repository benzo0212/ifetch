// client/src/api/axios.js
import axios from 'axios';

const api = axios.create({
  // In production (Render), requests go to same domain
  // In dev, fallback to localhost
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 10000
});

export default api;
