import { ClientRequestConfig } from '../../../../../resources/side-effects/types';
import { Credentials, ProxyFactory_ } from '../../../../../typescript';
import { httpClientGet } from './httpClientGet';

export async function confHttpClient(
  conf: Promise<{
    config: ClientRequestConfig;
    credentials: Credentials;
  }>,
  proxy?: ProxyFactory_ | null,
) {
  const { config } = await conf;

  return httpClientGet(proxy)(config);
}
