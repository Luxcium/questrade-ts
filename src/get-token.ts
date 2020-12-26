import { config } from 'dotenv';

/** QuesTrade Token */
// in (dot).env file :
// QUESTRADE_API_TOKEN="PQHfjX1hPA-XXXXX_XXXXX-6vpDUDRHB0"
export const getMyToken = () => {
  config();
  return process.env.QUESTRADE_API_TOKEN ?? '';
};
