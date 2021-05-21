import type { ApiOptions, ProxyFactory_ } from '../../../../typescript';
import { validateToken, writeCreds } from '../../resources/side-effects';
import { confHttpClient } from './http-autentication/confHttpClient';
import { getConf } from './http-autentication/getConf';
import { responseToCreds } from './http-autentication/responseToCreds';

export async function _oAuthHttp({
  apiOptions,
  proxy,
}: {
  apiOptions: ApiOptions;
  proxy?: ProxyFactory_ | null;
}) {
  const creds = validateToken(apiOptions);
  const conf = getConf(creds);
  const response = confHttpClient(conf, proxy);
  const responseCreds = responseToCreds(response);

  return writeCreds({ apiOptions, conf, responseCreds });
}
