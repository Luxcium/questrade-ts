import type { ApiOptions, ProxyFactory_ } from '../../../../typescript';
import { confHttpClient, getConf, responseToCreds } from './http-autentication';
import { validateToken } from './validateToken';
import { writeCreds } from './writeCreds';

export async function _oAuthHttp(
  apiOptions: ApiOptions,
  proxy?: ProxyFactory_ | null,
) {
  const creds = validateToken(apiOptions);
  const conf = getConf(creds);
  const response = confHttpClient(conf, proxy);
  const responseCreds = responseToCreds(response);

  return writeCreds(apiOptions, responseCreds, conf);
}
