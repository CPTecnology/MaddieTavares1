import axios from 'axios';

export const runtime = 'edge';

const api = axios.create({
  // O NOVO ENDEREÇO SEGURO
  baseURL: 'https://api.maddietavares.cv', 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
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