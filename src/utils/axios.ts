/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LocalStorage } from './LocalStorage';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173/',
});

axiosInstance.interceptors.request.use((config) => {
  const user = LocalStorage.getItem('auth');

  if (user) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});
