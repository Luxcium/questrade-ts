import { _credentialsFactory } from '../private/auth/_credentialsFactory';
import { errorlog } from '../resources/side-effects';
import { ApiOptions, Logger } from '../typescript';
import { questradeApiFactory } from './questradeAPI';

export async function questradeAPI(apiOptions: ApiOptions) {
  const errorloger: Logger = apiOptions.errorloger ?? errorlog;
  const proxyFactory = apiOptions.proxyFactory ?? null;

  const token: string =
    typeof apiOptions.token === 'function'
      ? apiOptions.token()
      : typeof apiOptions.token === 'string'
      ? apiOptions.token
      : 'ERROR';

  apiOptions.token = token;

  const credentials = await _credentialsFactory(apiOptions, proxyFactory);

  return {
    credentials,
    qtApi: await questradeApiFactory(credentials, proxyFactory, errorloger),
  };
}
