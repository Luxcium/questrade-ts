// ./src/main.ts
import axios, { AxiosResponse } from 'axios';
import {
  readAuthDataFromFile,
  writeAuthDataToFile,
} from './src/authDataStorage';
import type { AuthData } from './src/types/AuthData';

const API_BASE_URL = 'https://api.example.com';
const AUTH_FILE_PATH = './auth.json';

const refreshAccessToken = async (refreshToken: string): Promise<AuthData> => {
  const response = await axios.post(`${API_BASE_URL}/refresh-token`, {
    refreshToken,
  });
  return response.data;
};

const authenticateApiRequest = async (): Promise<void> => {
  let authData = readAuthDataFromFile(AUTH_FILE_PATH);

  if (!authData || new Date().getTime() >= authData.expirationTimestamp) {
    authData = await refreshAccessToken(authData ? authData.refreshToken : '');
    writeAuthDataToFile(AUTH_FILE_PATH, authData);
  }

  axios.defaults.headers.common.Authorization = `Bearer ${authData.accessToken}`;
};

export const main = async (): Promise<void> => {
  await authenticateApiRequest();

  // Perform API requests here
};

export type { AxiosResponse };
