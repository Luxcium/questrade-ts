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
  // IoRedis,
  ProxyHandlerOptions,
} from '../../../types';
import { ReflexionLoggerProxyHandlerAbstractClass } from '../../core/reflexion-logger-proxy-handler-abstarct-class';

// #endregion IMPORTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
export type IoRedis = Redis.Redis;
export type CachedResponse = any;

class RedisQtApiProxyHandlerClass<T extends Function = ClientStatic>
  extends ReflexionLoggerProxyHandlerAbstractClass<T>
  implements ProxyHandler<T> {
  // Private jsonCache: JSONCache<CachedApiResponse>;
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

 Data: { time: '2021-01-27T00:58:33.579000-05:00' },
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
      // Const isInExclusionList = ['URL:8081F947BB07DB0A4A'].some(
      //   URL => URL === 'URL:8081F947BB07DB0A4A',
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
      // Const cacheTotal = ((await myRedis.get(`cache:total:${URL_HSH_}`)) ??
      // 0) as number;
      myRedis.incr(`cache:${configFromApi.url}`);
      // Const cacheTotalx = ((await myRedis.get(
      //   `cache:total:${configFromApi.url}`,
      // )) ?? 0) as number;
      myRedis.sadd(`cache:unique:${URL_HSH_}`, DATA_HSH);
      // Const cacheUnique = await myRedis.scard(`cache:unique:${URL_HSH_}`);
      // Try {
      //   Console.log(
      //     `total(${Number(cacheTotal)}) / unique(${Number(cacheUnique)}): `,
      //     Number(cacheTotal) / Number(cacheUnique),
      //   );
      // } catch (error) {
      //   Console.error('cacheTotal / cacheUnique: ', error.message);
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
        // Id0('if (this?.handlerOptions?.noCaching !== true)');
        // Const options: ISetOptions = { expire: 1000 };

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
//   Constructor(
//     Protected handlerOptions: ProxyHandlerOptions, // protected tedis: Tedis, // protected credentials?: Credentials,
//   ) {
//     Super(handlerOptions);
//     // this.jsonCache = new jsonRedis<CachedApiResponse>(redisinstance, {
//     // prefix: 'response:cache:',
//     // });
//     // void this.jsonCache;
// }

// Protected async applyTargetReflexion(
//   Target: T,
//   ThisArg: any,
//   ArgArray?: any,
// ) {
//
//   // $ Reflect.apply  ―――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
//   Const returnValue = Reflect.apply(target, thisArg, argArray);
//   Const data = `${JSON.stringify((await returnValue).data ?? null)}`;
//   Const proxyData = this._proxyData(urlPath, data, argArray);
//   Const response: ClientResponse = await returnValue;

//   Return { proxyData, response, returnValue, urlPath };
// }

// Const urlPath = getQtUrlPathFromArgs(argArray);
// Const { URL_HSH } = getUrlHash(urlPath);
// // getDataHash,
// // getUDatagram,
// // getUrlAndDataHashes,
// // getUrlHashe,
// Try {
//   // +SIDE EFFECTS ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
//   Const isInCache: boolean = echo1(
//     "this.tedis.command('hgetall', URL_HSH): ",
//     Await this.tedis.command('hgetall', URL_HSH),
//   );
//   Const initialValue: any = {};
//   If (isInCache) {
//     // if (process.exit()) { };
//     Const parsed = ech0(
//       Parser<any[]>(await this.tedis.command('HGETALL', URL_HSH)),
//     );
//     For (let i = 0; i < parsed.length; i += 2) {
//       InitialValue[parser((parsed[i] as string).split(':')[0])] =
//         Parsed[i + 1];
//     }
//   }
//   Ech0(initialValue);
//   // $ APPLY REFLEXCTION ON TARGET ――――――――――――――――――――――――――――――――――――――――――$>
//   Const {
//     ProxyData,
//     Response,
//     ReturnValue,
//   } = await this.applyTargetReflexion(target, thisArg, argArray);
//   // echo(response.status);
//   // echo(response.statusText);
//   // echo(response.headers['content-type']);
//   // echo(response.headers['content-length']);
//   // echo(response.headers['strict-transport-security']);
//   If (this.credentials) {
//     This.credentials.xRatelimitRemaining = Number(
//       Response.headers['x-ratelimit-remaining'],
//     );
//     This.credentials.xRatelimitReset = Number(
//       Response.headers['x-ratelimit-reset'],
//     );
//     This.credentials.fromCache = true;
//   }
//   Void proxyData;
//   Void this.tedis;
//   Const myKey = proxyData.URL_HSH;
//   Const hash = [
//     'URL_HSH:',
//     ProxyData.URL_HSH,
//     'path:',
//     ProxyData.path,
//     'DATA_HSH:',
//     ProxyData.DATA_HSH,
//     'data:',
//     ProxyData.data,
//     'UDATAGRAM:',
//     ProxyData.UDATAGRAM,
//     'status:',
//     Response.status,
//     'statusText:',
//     Response.statusText,
//     'headers_type',
//     Response.headers['content-type'],
//     'headers_length',
//     Response.headers['content-length'],
//     'url:',
//     (response.config as ClientRequestConfig).url,
//     'urlPath:',
//     UrlPath,
//   ];
//   //*
//   Const tempResponse = {
//     Response: {
//       ClientRequest: {
//         /* any */
//       },
//       Config: {
//         Url: 'https://api06.iq.questrade.com/v1/accounts',
//       },
//       Data: {
//         /* any */
//       },
//       Headers: {
//         'content-length': '152',
//         'content-type': 'application/json; charset=utf-8',
//         'date': 'Tue, 19 Jan 2021 06:09:06 GMT',
//         'x-ratelimit-remaining': '29970',
//         'x-ratelimit-reset': '1611038234',
//       },
//       Status: 418,
//       StatusText: 'I’M A TEAPOT',
//     },
//   };
//   //*/
//   Void tempResponse;
//   Voech0(await this.tedis.command('HSET', myKey, ...hash));
//   Voech0(await this.tedis.command('EXPIRE', myKey, 30));
//   // echo<any>(myKey, await this.tedis.command('TTL', myKey));
//   // ech0(await this.tedis.command('TTL', myKey));
//   If ((await returnValue)?.data?.accounts) {
//     Ech0((await returnValue)?.data?.accounts);
//   }
//   Return ech0({
//     ...(await returnValue),
//     Config: {},
//     Data: {
//       ...(await returnValue)?.data,
//       Accounts: [
//         {
//           ClientAccountType: 'Individual',
//           IsBilling: true,
//           IsPrimary: false,
//           Number: '51648972',
//           Status: 'Active',
//           Type: 'TFSA',
//         },
//       ],
//       // time: '2011-11-11T11:11:11.282000-05:00',
//       UserId: 126_691,
//     },
//     Headers: {},
//     Request: {},
//   });
//   // return returnValue;
//   // + CATCH ERROR ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
// } catch (error) {
//   Void echo(error);
//   Return { data: null };
// }

// Protected proxy = {
//   Class: 'redisClientProxyHandlerClass',
//   Extends: 'ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>',
//   Implements: 'ProxyHandler<ClientStatic>',
// };

// Private _proxyData(urlPath: string, data: string, argArray?: any) {
//   Return {
//     ClientConfig: argArray[0],
//     Proxy: {
//       ...this.proxy,
//       HandlerMethod:
//         'async apply(target: ClientStatic, thisArg: any, argArray?: any) ',
//       SideEffects: 'void echo(proxyData); voech0(this.tedis);',
//     },
//     ...getUrlAndDataHashes(urlPath, data),
//   };
// }
