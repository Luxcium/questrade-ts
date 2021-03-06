import { questradeApiFactory } from '../private/api/_getQuestradeApi';
import { _credentialsFactory } from '../private/auth/_credentialsFactory';
import { ApiCallQ_ } from '../private/core/next-rate-limiter/queue';
import { errorLog } from '../resources/side-effects';
import { ApiOptions } from '../typescript';
import { preValidateToken } from '../utils';

export async function questradeAPI(apiOptions: ApiOptions) {
  //

  const errorloger: any = apiOptions.errorloger ?? errorLog;
  const apiCallQ = new ApiCallQ_(apiOptions);

  apiOptions.token = preValidateToken(apiOptions);
  const proxyFactory = apiOptions.proxyFactory ?? null;
  const credentials = await _credentialsFactory(
    apiOptions,
    apiCallQ,
    proxyFactory,
  );

  return {
    apiCallQ,
    credentials,
    // XXX: WORKING ON questradeApiFactory CALLS
    qtApi: await questradeApiFactory(
      credentials,
      apiCallQ,
      proxyFactory,
      errorloger,
    ),
  };
}
