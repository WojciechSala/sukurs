import axios from 'axios';

let Api = axios.create({
  baseURL: `http://localhost:8081`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
