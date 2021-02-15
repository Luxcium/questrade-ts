/* eslint-disable radar/no-duplicate-string */
// #region IMPORTS ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
import Redis from 'ioredis';
import JSONCache from 'redis-json';

import { Credentials, ProxyFactory_ } from '../../../../../typescript';
import {
  getQtUrlPathFromArgs,
  getUrlAndDataHashes,
  getUrlHash,
  id0,
} from '../../../../../utils';
import { ech0, getHttpClient } from '../../..';
import {
  ClientStatic,
  // ioRedis,
  ProxyHandlerOptions,
} from '../../../types';
import { ReflexionLoggerProxyHandlerAbstractClass } from '../../core/reflexion-logger-proxy-handler-abstarct-class';

// #endregion IMPORTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
export type IoRedis = Redis.Redis;
export type CachedResponse = any;

class RedisQtApiProxyHandlerClass<T extends Function = ClientStatic>
  extends ReflexionLoggerProxyHandlerAbstractClass<T>
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

  async apply(target: T, thisArg: any, argArray?: any) {
    const myRedis = new Redis();

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
        ech0({ it: this.handlerOptions });
        // $ READ FROM CACHE ―――――――――――――――――――――――――――――――――――――――――――――――――――$>
        const responseFromCache = await jsonCache.get(URL_HSH);

        if (responseFromCache?.responseFromCache === true) {
          myRedis.disconnect();

          // +RETURN VALUE FROM CACHE ――――――――――――――――――――――――――――――――――――――――――$>
          return ech0(responseFromCache);
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

      if (this?.handlerOptions?.noCaching !== true) {
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

//    // private jsonCache: JSONCache<CachedApiResponse>;
//   constructor(
//     protected handlerOptions: ProxyHandlerOptions, // protected tedis: Tedis, // protected credentials?: Credentials,
//   ) {
//     super(handlerOptions);
//     // this.jsonCache = new jsonRedis<CachedApiResponse>(redisinstance, {
//     // prefix: 'response:cache:',
//     // });
//     // void this.jsonCache;
// }

// protected async applyTargetReflexion(
//   target: T,
//   thisArg: any,
//   argArray?: any,
// ) {
//
//   // $ Reflect.apply  ―――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
//   const returnValue = Reflect.apply(target, thisArg, argArray);
//   const data = `${JSON.stringify((await returnValue).data ?? null)}`;
//   const proxyData = this._proxyData(urlPath, data, argArray);
//   const response: ClientResponse = await returnValue;

//   return { proxyData, response, returnValue, urlPath };
// }

// const urlPath = getQtUrlPathFromArgs(argArray);
// const { URL_HSH } = getUrlHash(urlPath);
// // getDataHash,
// // getUDatagram,
// // getUrlAndDataHashes,
// // getUrlHashe,
// try {
//   // +SIDE EFFECTS ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
//   const isInCache: boolean = echo1(
//     "this.tedis.command('hgetall', URL_HSH): ",
//     await this.tedis.command('hgetall', URL_HSH),
//   );
//   const initialValue: any = {};
//   if (isInCache) {
//     // if (process.exit()) { };
//     const parsed = ech0(
//       parser<any[]>(await this.tedis.command('HGETALL', URL_HSH)),
//     );
//     for (let i = 0; i < parsed.length; i += 2) {
//       initialValue[parser((parsed[i] as string).split(':')[0])] =
//         parsed[i + 1];
//     }
//   }
//   ech0(initialValue);
//   // $ APPLY REFLEXCTION ON TARGET ――――――――――――――――――――――――――――――――――――――――――$>
//   const {
//     proxyData,
//     response,
//     returnValue,
//   } = await this.applyTargetReflexion(target, thisArg, argArray);
//   // echo(response.status);
//   // echo(response.statusText);
//   // echo(response.headers['content-type']);
//   // echo(response.headers['content-length']);
//   // echo(response.headers['strict-transport-security']);
//   if (this.credentials) {
//     this.credentials.xRatelimitRemaining = Number(
//       response.headers['x-ratelimit-remaining'],
//     );
//     this.credentials.xRatelimitReset = Number(
//       response.headers['x-ratelimit-reset'],
//     );
//     this.credentials.fromCache = true;
//   }
//   void proxyData;
//   void this.tedis;
//   const myKey = proxyData.URL_HSH;
//   const hash = [
//     'URL_HSH:',
//     proxyData.URL_HSH,
//     'path:',
//     proxyData.path,
//     'DATA_HSH:',
//     proxyData.DATA_HSH,
//     'data:',
//     proxyData.data,
//     'UDATAGRAM:',
//     proxyData.UDATAGRAM,
//     'status:',
//     response.status,
//     'statusText:',
//     response.statusText,
//     'headers_type',
//     response.headers['content-type'],
//     'headers_length',
//     response.headers['content-length'],
//     'url:',
//     (response.config as ClientRequestConfig).url,
//     'urlPath:',
//     urlPath,
//   ];
//   //*
//   const tempResponse = {
//     response: {
//       clientRequest: {
//         /* any */
//       },
//       config: {
//         url: 'https://api06.iq.questrade.com/v1/accounts',
//       },
//       data: {
//         /* any */
//       },
//       headers: {
//         'content-length': '152',
//         'content-type': 'application/json; charset=utf-8',
//         'date': 'Tue, 19 Jan 2021 06:09:06 GMT',
//         'x-ratelimit-remaining': '29970',
//         'x-ratelimit-reset': '1611038234',
//       },
//       status: 418,
//       statusText: 'I’M A TEAPOT',
//     },
//   };
//   //*/
//   void tempResponse;
//   voech0(await this.tedis.command('HSET', myKey, ...hash));
//   voech0(await this.tedis.command('EXPIRE', myKey, 30));
//   // echo<any>(myKey, await this.tedis.command('TTL', myKey));
//   // ech0(await this.tedis.command('TTL', myKey));
//   if ((await returnValue)?.data?.accounts) {
//     ech0((await returnValue)?.data?.accounts);
//   }
//   return ech0({
//     ...(await returnValue),
//     config: {},
//     data: {
//       ...(await returnValue)?.data,
//       accounts: [
//         {
//           clientAccountType: 'Individual',
//           isBilling: true,
//           isPrimary: false,
//           number: '51648972',
//           status: 'Active',
//           type: 'TFSA',
//         },
//       ],
//       // time: '2011-11-11T11:11:11.282000-05:00',
//       userId: 126_691,
//     },
//     headers: {},
//     request: {},
//   });
//   // return returnValue;
//   // + CATCH ERROR ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
// } catch (error) {
//   void echo(error);
//   return { data: null };
// }

// protected proxy = {
//   class: 'redisClientProxyHandlerClass',
//   extends: 'ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>',
//   implements: 'ProxyHandler<ClientStatic>',
// };

// private _proxyData(urlPath: string, data: string, argArray?: any) {
//   return {
//     clientConfig: argArray[0],
//     proxy: {
//       ...this.proxy,
//       handlerMethod:
//         'async apply(target: ClientStatic, thisArg: any, argArray?: any) ',
//       sideEffects: 'void echo(proxyData); voech0(this.tedis);',
//     },
//     ...getUrlAndDataHashes(urlPath, data),
//   };
// }
