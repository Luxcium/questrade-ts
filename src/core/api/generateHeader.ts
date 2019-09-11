import { Credentials } from '../libraries/Credentials';
export function generateHeader(endpoint: string, oAuth: Credentials) {
  return {
    url: oAuth.apiUrl + endpoint,
    methode: 'GET',
    headers: {
      Authorization: `Bearer ${oAuth.accessToken}`,
    },
  };
}
