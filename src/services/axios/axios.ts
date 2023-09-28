import axios from 'axios';
import { getCurrentLocale } from 'src/helpers/getLocale';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = getCurrentLocale();
  return config;
});

export default axiosInstance;
