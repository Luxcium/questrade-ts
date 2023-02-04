// authDataStorage.ts
import fs from 'node:fs';
import { AuthData } from './types';

export const readAuthDataFromFile = (
  filePath: string
): AuthData | undefined => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
};

export const writeAuthDataToFile = (
  filePath: string,
  authData: AuthData
): void => {
  fs.writeFileSync(filePath, JSON.stringify(authData), 'utf-8');
};
