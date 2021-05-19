import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cine-five.vercel.app/',
});