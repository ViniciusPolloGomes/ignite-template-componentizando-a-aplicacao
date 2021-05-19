import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://cine-five.vercel.app/',
});