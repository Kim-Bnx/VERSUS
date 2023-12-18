/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LocalStorage } from './LocalStorage';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

axiosInstance.interceptors.request.use((config) => {
  const user = LocalStorage.getItem('auth');

  if (user) {
    const userToken = user.auth.token;
    // TODO Add Bearer
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = userToken;
  }
  return config;
});
