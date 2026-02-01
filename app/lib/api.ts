import axios from 'axios';

const api = axios.create({
  // Usar 127.0.0.1 evita atrasos de DNS no Windows
  baseURL: 'http://127.0.0.1:3333', 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Se o servidor não responder em 10s, cancela (evita spinner infinito)
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;