import { validateToken, writeToken } from '../../resources/side-effects';
import type { ApiOptions, ProxyFactory_ } from '../../typescript';
import { configs } from './config';
import { httpClientGet } from './httpClientGet';
import { validateResponse } from './validateResponse';

async function _oAuthHttp(
  apiOptions: ApiOptions,
  proxy?: ProxyFactory_ | null,
) {
  const creds = await validateToken(apiOptions);
  const conf = configs(creds);
  const httpClient = httpClientGet(proxy);
  const response = httpClient(conf.config);
  const validatedResponse = await validateResponse(response);

  return writeToken(conf.credentials, validatedResponse);
}

export { _oAuthHttp };
