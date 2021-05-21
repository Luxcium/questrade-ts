import { ClientRequestConfig } from '../../../../../resources/side-effects/types';

export function oAuthConfig(
  refreshToken: string,
  authUrl: string,
): ClientRequestConfig {
  return {
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    url: `${authUrl}/oauth2/token`,
  };
}
