import { validateToken } from '../../resources/side-effects';
import { ClientRequestConfig } from '../../resources/side-effects/typescript';
import { ApiOptions, Credentials } from '../../typescript';

export function config(
  apiOptions: ApiOptions,
): [ClientRequestConfig, Credentials] {
  const { refreshToken, credentials } = validateToken(apiOptions);
  return [
    {
      method: 'GET',
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      url: `${credentials.authUrl}/oauth2/token`,
    },
    credentials,
  ];
}
