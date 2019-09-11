import { Credentials } from '../../libraries';

export const generateHeader = (endpoint: string, credentials: Credentials) => {
  return {
    url: credentials.apiUrl + endpoint,
    methode: 'GET',
    headers: {
      Authorization: `Bearer ${credentials.accessToken}`,
      location: credentials.accountNumber,
    },
  };
};
