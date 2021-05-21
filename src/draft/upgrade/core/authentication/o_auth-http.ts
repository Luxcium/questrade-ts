import type { ApiOptions, ProxyFactory_ } from '../../../../typescript';
import { validateToken, writeCreds } from '../../resources/side-effects';
import { confHttpClient, getConf, responseToCreds } from './http-autentication';

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
