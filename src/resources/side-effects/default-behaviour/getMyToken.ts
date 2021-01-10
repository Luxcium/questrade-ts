import { config } from 'dotenv';

export function getMyToken(): string {
  config();
  return process.env.QUESTRADE_API_TOKEN ?? '';
}
