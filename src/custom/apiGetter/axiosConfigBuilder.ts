import { validateToken } from '..';

export const axiosConfigBuilder = (token: any) => {
  const { refreshToken, credentials } = validateToken(token);
  return {
    axiosConfig: {
      url: `${credentials.authUrl}/oauth2/token`,
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    },
    credentials,
  };
};
