import { httpClientGet } from '../../../private/auth/http-client-get';

export { httpClientGet };
export { oAuthConfig };
function oAuthConfig(refreshToken: string, authUrl: string) {
  return {
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    url: `${authUrl}/oauth2/token`,
  };
}
