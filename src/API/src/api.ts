// api.ts
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthData } from './types';

const api: AxiosInstance = Axios.create({
  baseURL: 'https://your-api-endpoint.com',
});

// Middleware to add the access token to the headers of each request
api.interceptors.request.use((config: AxiosRequestConfig) => {
  const authData: AuthData = // read the auth data from the file here
    (config.headers.Authorization = `Bearer ${authData.accessToken}`);
  return config;
});

// Middleware to refresh the token and store the new values in the file
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Refresh the token here and update the file with the new values
    }
    throw error;
  }
);

export default api;
