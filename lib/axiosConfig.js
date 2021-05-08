import axios from 'axios';

const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : 'http://localhost:3000',
});

export default request;
