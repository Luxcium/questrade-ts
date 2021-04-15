import { echo, getHttpClient } from '../../../../resources/side-effects';
import { ClientStatic } from '../../../../resources/side-effects/types';
import { ProxyFactory_ } from '../../../../typescript';

export function httpClientGet(proxy?: ProxyFactory_ | null): ClientStatic {
  if (proxy?.oAuthHttpCredentials && proxy.activate) {
    echo('Warning: A Proxy is used in oAuth Connector!');

    return proxy.activate({});
  }

  return getHttpClient();
}
