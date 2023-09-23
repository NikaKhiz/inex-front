import axios from 'axios';

const defaultOptions = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export default axios.create(defaultOptions);
