import { ClientRequestConfig } from '../../../../../resources/side-effects/types';
import { Credentials } from '../../../../../typescript';
import { oAuthConfig } from './oAuthConfig';

export async function getConf(
  creds: Promise<{
    credentials: Credentials;
    refreshToken: string;
  }>,
): Promise<{
  config: ClientRequestConfig;
  credentials: Credentials;
}> {
  const cred = await creds;

  return {
    config: oAuthConfig(cred.refreshToken, cred.credentials.authUrl),
    credentials: cred.credentials,
  };
}
