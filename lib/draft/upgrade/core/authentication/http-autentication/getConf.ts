import type { ClientRequestConfig } from '../../../../../resources/side-effects/types';
import type { Credentials } from '../../../../../typescript';
import { oAuthConfig } from '../../../resources/utils/o_auth-config';

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
