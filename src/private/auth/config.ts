import { ClientRequestConfig } from '../../resources/side-effects/typescript';
import { Credentials } from '../../typescript';

export function configs(arg: {
  refreshToken: string;
  credentials: Credentials;
}): { config: ClientRequestConfig; credentials: Credentials } {
  // const { refreshToken, credentials } = validateToken(apiOptions);
  return {
    config: {
      method: 'GET',
      params: {
        grant_type: 'refresh_token',
        refresh_token: arg.refreshToken,
      },
      url: `${arg.credentials.authUrl}/oauth2/token`,
    },
    credentials: arg.credentials,
  };
}
