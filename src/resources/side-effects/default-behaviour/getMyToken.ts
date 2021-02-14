import { config } from 'dotenv';

export function getMyToken(): string {
  config();
  if (process.env.NODE_ENV === 'development') {
    return process.env.QUESTRADE_API_TOKEN_JS ?? '';
  }

  return process.env.QUESTRADE_API_TOKEN ?? '';
}
