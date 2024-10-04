/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LocalStorage } from './LocalStorage';

/* https://versus-api.onrender.com */
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const axiosInstanceToken = axios.create({
  baseURL: 'http://localhost:3000',
});

axiosInstanceToken.interceptors.request.use((config) => {
  const user = LocalStorage.getItem('auth');

  if (user) {
    const userToken = user.auth.token;
    // TODO Add Bearer
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = userToken;
  }
  return config;
});
