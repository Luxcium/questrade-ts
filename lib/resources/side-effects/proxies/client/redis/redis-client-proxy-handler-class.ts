/* eslint-disable radar/no-duplicate-string */
// #region IMPORTS ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
import Redis from 'ioredis';
import JSONCache from 'redis-json';

import type { Credentials, ProxyFactory_ } from '../../../../../typescript';
import {
  getQtUrlPathFromArgs,
  getUrlAndDataHashes,
  getUrlHash,
  id0,
} from '../../../../../utils';
import { ech0, getHttpClient } from '../../..';
import type {
  ClientStatic,
  // ioRedis,
  ProxyHandlerOptions,
} from '../../../types';
import { ProxyHandlerAbstractClass } from '../../core/reflexion-logger-proxy-handler-abstarct-class';

// #endregion IMPORTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
export type IoRedis = Redis.Redis;
export type CachedResponse = any;

class RedisQtApiProxyHandlerClass<T extends Function = ClientStatic>
  extends ProxyHandlerAbstractClass<T>
  implements ProxyHandler<T> {
  // private jsonCache: JSONCache<CachedApiResponse>;
  constructor(protected handlerOptions: ProxyHandlerOptions) {
    super(handlerOptions);
    this.handlerOptions.notFromCache = false;
    this.handlerOptions.noCaching = false;
  }

  protected proxy = {
    class: 'RedisQtApiProxyHandlerClass',
    extends: 'ReflexionLoggerProxyHandlerAbstractClass<T>',
    implements: 'ProxyHandler<T>',
    proxy: 'Redis QtApi Caching Proxy',
  };

  public async apply(target: T, thisArg: any, argArray?: any) {
    const myRedis = new Redis('0.0.0.0');

    try {
      const urlPath = getQtUrlPathFromArgs(argArray);
      const { URL_HSH } = getUrlHash(urlPath);
      /*

 data: { time: '2021-01-27T00:58:33.579000-05:00' },
  UDATAGRAM: 'UDATAGRAM:20D0F6BB5559ACF',
  URL_HSH: 'URL:8081F947BB07DB0A4A',
  path: '/v1/time',
  responseFromCache: true,
  responseFromApi: false,
  statusText: 'OK'
 */
      const jsonCache = new JSONCache<CachedResponse>(myRedis, {
        prefix: 'cache:response:',
      });
      // const isInExclusionList = ['URL:8081F947BB07DB0A4A'].some(
      //   uRL => URL === 'URL:8081F947BB07DB0A4A',
      // );

      if (this.handlerOptions.notFromCache !== true) {
        id0({ it: this.handlerOptions });
        // $ READ FROM CACHE ―――――――――――――――――――――――――――――――――――――――――――――――――――$>
        const responseFromCache = await jsonCache.get(URL_HSH);

        if (responseFromCache?.responseFromCache === true) {
          myRedis.disconnect();

          // +RETURN VALUE FROM CACHE ――――――――――――――――――――――――――――――――――――――――――$>
          return id0(responseFromCache);
        }
      } else {
        ech0({ MESSGAE: 'NOT FROM CACHE' });
      }

      // $ CREATE VALUE TO CACHE ―――――――――――――――――――――――――――――――――――――――――――――――$>

      const responseFromApi = await Reflect.apply(target, thisArg, argArray);
      const dataToHash = responseFromApi.data;
      const urlAndDataHashes = getUrlAndDataHashes(urlPath, dataToHash);
      const { dataToCache, ...urlAndDataRest } = urlAndDataHashes;
      const configFromApi = responseFromApi.config;
      const headersFromApi = responseFromApi.headers;
      const requestFromApi = responseFromApi.request;
      const dataFromApi = responseFromApi?.data;

      void [configFromApi, headersFromApi, requestFromApi, dataFromApi];

      const { DATA_HSH, path, URL_HSH: URL_HSH_, UDATAGRAM } = urlAndDataRest;

      myRedis.incr(`cache:total:${URL_HSH_}`);
      // const cacheTotal = ((await myRedis.get(`cache:total:${URL_HSH_}`)) ??
      // 0) as number;
      myRedis.incr(`cache:${configFromApi.url}`);
      // const cacheTotalx = ((await myRedis.get(
      //   `cache:total:${configFromApi.url}`,
      // )) ?? 0) as number;
      myRedis.sadd(`cache:unique:${URL_HSH_}`, DATA_HSH);
      // const cacheUnique = await myRedis.scard(`cache:unique:${URL_HSH_}`);
      // try {
      //   console.log(
      //     `total(${Number(cacheTotal)}) / unique(${Number(cacheUnique)}): `,
      //     number(cacheTotal) / Number(cacheUnique),
      //   );
      // } catch (error) {
      //   console.error('cacheTotal / cacheUnique: ', error.message);
      // }

      void [dataToCache, DATA_HSH, path, URL_HSH_, UDATAGRAM];

      const responseToCache: CachedResponse = {
        ...responseFromApi,
        config: {
          fromCache: true,
          ...responseFromApi?.config,
          adapter: '[Function: httpAdapter, /*NOT AVAILABLE FROM CACHE*/]',
          availableFromCache: 'partial',

          headers: {
            fromApi: false,
            fromCache: true,
            proxy: { ...this.proxy },
            ...responseFromApi?.config?.headers,
            Authorization: '[Redacted] ...',
            location: '[Redacted] ...',
          },
          transformRequest: [
            '[Function: transformRequest, /*NOT AVAILABLE FROM CACHE*/]',
          ],
          transformResponse: [
            '[Function: transformResponse, /*NOT AVAILABLE FROM CACHE*/]',
          ],
          validateStatus:
            '[Function: validateStatus, /*NOT AVAILABLE FROM CACHE*/]',
          // */
        },
        data: { ...dataFromApi },
        headers: {
          'fromCache': true,
          ...responseFromApi.headers,
          'connection': 'CACHED',
          'strict-transport-security': '[NOT AVAILABLE FROM CACHE]',
          'x-ratelimit-remaining': '9999999',
          'x-ratelimit-reset': '0',
        },
        request: {
          availableFromCache: 'partial',
          fromCache: true,
          ...responseFromApi?.request,
          _events: '[NOT AVAILABLE FROM CACHE]',
          _redirectable: '[NOT AVAILABLE FROM CACHE]',
          agent: '[NOT AVAILABLE FROM CACHE]',
          res: '[NOT AVAILABLE FROM CACHE]',
          socket: '[NOT AVAILABLE FROM CACHE]',
        },
        ...urlAndDataRest, // { ...urlAndDataHashes, dataToCache: '[Duplicate]' },
        responseFromApi: false,
        responseFromCache: true,
      };

      if (this.handlerOptions.noCaching !== true) {
        // $ WRITE TO CACHE ――――――――――――――――――――――――――――――――――――――――――――――――――――$>
        // id0('if (this?.handlerOptions?.noCaching !== true)');
        // const options: ISetOptions = { expire: 1000 };

        await jsonCache.set(URL_HSH, responseToCache /* , options */);
      }

      myRedis.disconnect();

      // !! RETURN VALUE FROM API ――――――――――――――――――――――――――――――――――――――――――――――$>
      responseFromApi.responseFromApi = true;
      responseFromApi.headers.fromApi = true;
      responseFromApi.responseFromCache = false;
      responseFromApi.headers.fromCache = false;

      return id0(responseFromApi);
    } catch (error) {
      myRedis.disconnect();
      throw error;
    }
  }
}

export { RedisQtApiProxyHandlerClass };

export function redisProxyHandler(
  mainProxyHandlerOptions: ProxyHandlerOptions = {},
) {
  return function clientHandlerFactory(credentials?: Credentials) {
    const client: ClientStatic = getHttpClient();
    const newProxy: ProxyFactory_ = {};

    newProxy.activate = (proxyHandlerOptions: ProxyHandlerOptions) =>
      new Proxy(
        client,
        new RedisQtApiProxyHandlerClass({
          ...mainProxyHandlerOptions,
          ...proxyHandlerOptions,
        }),
      );
    newProxy.httpDataEndPointConnector =
      mainProxyHandlerOptions.httpConnectProxy ?? true;
    newProxy.oAuthHttpCredentials =
      mainProxyHandlerOptions.oAuthHttpProxy ?? false;
    newProxy.credendials = credentials;

    return newProxy;
  };
}
