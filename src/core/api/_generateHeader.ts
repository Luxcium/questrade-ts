import { Credentials } from '../libraries';

export const _generateHeader = (
  endpoint: string,
  credentials: Credentials,
  methode: string = 'GET',
  postData?: any
) => {
  const data: any = postData || '';

  return {
    url: credentials.apiUrl + endpoint,
    methode,
    headers: {
      Authorization: `Bearer ${credentials.accessToken}`,
      location: credentials.accountNumber,
    },
    data,
  };
};
