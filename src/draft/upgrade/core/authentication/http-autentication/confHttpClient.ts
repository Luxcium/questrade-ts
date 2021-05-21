import { ClientRequestConfig } from '../../../../../resources/side-effects/types';
import { Credentials, ProxyFactory_ } from '../../../../../typescript';
import { httpClientGet } from './httpClientGet';

interface NewType {
  config: ClientRequestConfig;
  credentials: Credentials;
}

interface NewType_2 {
  conf: Promise<NewType>;
  proxy?: ProxyFactory_ | null;
}

export async function confHttpClient({ conf, proxy }: NewType_2) {
  const { config } = await conf;

  return httpClientGet(proxy)(config);
}
