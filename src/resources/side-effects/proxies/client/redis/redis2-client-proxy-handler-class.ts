/* eslint-disable sonarjs/no-duplicate-string */
// #region IMPORTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
import Redis from 'ioredis';
import JSONCache from 'redis-json';
import { ech0, getHttpClient } from '../../..';
import { ClientHandlerFactory, Credentials } from '../../../../..';
import {
  getQtUrlPathFromArgs,
  getUrlAndDataHashes,
  getUrlHash,
} from '../../../../../utils';
import {
  ClientStatic,
  // IoRedis,
  ProxyHandlerOptions,
} from '../../../types';
import { ReflexionLoggerProxyHandlerAbstractClass } from '../../core/reflexion-logger-proxy-handler-abstarct-class';

// #endregion IMPORTS ――――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
export type IoRedis = Redis.Redis;
export type CachedResponse = any;

class RedisProxyHandlerClass<T extends Function = ClientStatic>
  extends ReflexionLoggerProxyHandlerAbstractClass<T>
  implements ProxyHandler<T> {
  // private jsonCache: JSONCache<CachedApiResponse>;
  constructor(protected handlerOptions: ProxyHandlerOptions) {
    super(handlerOptions);
  }

  async apply(target: T, thisArg: any, argArray?: any): Promise<any> {
    const urlPath = getQtUrlPathFromArgs(argArray);
    const { URL_HSH } = getUrlHash(urlPath);
    const myRedis = new Redis();

    const jsonCache = new JSONCache<CachedResponse>(myRedis, {
      prefix: 'cache:response:',
    });

    getUrlAndDataHashes;
    ech0(URL_HSH);

    // $ READ FROM CACHE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    const responseFromCache = await jsonCache.get(URL_HSH);
    if (responseFromCache?.responseFromCache === true) {
      myRedis.disconnect();
      // +RETURN VALUE FROM CACHE ――――――――――――――――――――――――――――――――――――――――――――――$>
      return ech0(responseFromCache);
    }
    // $ CREATE VALUE TO CACHE ―――――――――――――――――――――――――――――――――――――――――――――――――$>

    const responseFromApi = await Reflect.apply(target, thisArg, argArray);
    const dataToHash = responseFromApi.data;
    const urlAndDataHashes = getUrlAndDataHashes(urlPath, dataToHash);
    const { dataToCache, ...urlAndDataRest } = urlAndDataHashes;
    void dataToCache;
    const configFromApi = responseFromApi.config;
    const headersFromApi = responseFromApi.headers;
    const requestFromApi = responseFromApi.request;
    const dataFromApi = responseFromApi?.data;

    void [configFromApi, headersFromApi, requestFromApi, dataFromApi];
    const responseToCache: CachedResponse = {
      ...responseFromApi,
      config: {
        ...responseFromApi?.config,
        adapter: '[Function: httpAdapter, /*NOT AVAILABLE FROM CACHE*/]',
        availableFromCache: 'partial',

        fromCache: true,
        headers: {
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
      headers: {
        ...responseFromApi.headers,
        'connection': 'CACHED',
        'strict-transport-security': '[NOT AVAILABLE FROM CACHE]',
        'x-ratelimit-remaining': '999',
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
        //       request: {
        //   _closed: false,
        //   socket: '[NOT AVAILABLE FROM CACHE]',
        // ...responseFromApi?.request?.host, // : 'api03.iq.questrade.com',
        //   upgradeOrConnect: false,
        //   _hasBody: true,
        //   socketPath: undefined,
        //   chunkedEncoding: false,
        //   outputData: [],
        //   outputSize: 0,
        //   _headerSent: true,
        //   aborted: false,
        //   _contentLength: 0,
        //   res: '[NOT AVAILABLE FROM CACHE]',
        //   sendDate: false,
        //   _events: '[NOT AVAILABLE FROM CACHE]',
        //   _removedContLen: false,
        //   writable: true,
        //   _removedTE: false,
        //   _keepAliveTimeout: 0,
        //   useChunkedEncodingByDefault: false,
        //   maxHeaderSize: undefined,
        //   agent: '[NOT AVAILABLE FROM CACHE]',
        //   _onPendingData: 'function () { [native code] }',
        //   reusedSocket: false,
        //   _ended: true,
        //   parser: null,
        //   _maxListeners: undefined,
        //   _redirectable: '[NOT AVAILABLE FROM CACHE]',
        //   finished: true,
        //   _eventsCount: 7,
        //   _header: 'GET /v1/symbols/search?prefix=COUCHE%20TARD&offset=0 HTTP/1.1\r\n' +
        //     'Accept: application/json, text/plain, */*\r\n' +
        //     'Authorization: Bearer wRXMSziYRx6KytD0_2UB5coZLwjoYYx80\r\n' +
        //     'location: 51648972\r\n' +
        //     'User-Agent: axios/0.21.1\r\n' +
        //     'Host: api03.iq.questrade.com\r\n' +
        //     'Connection: close\r\n' +
        //     '\r\n',
        //   timeoutCb: null,
        //   fromCache: true,
        //   _defaultKeepAlive: true,
        //   destroyed: false,
        //   path: '/v1/symbols/search?prefix=COUCHE%20TARD&offset=0',
        //   shouldKeepAlive: false,
        //   availableFromCache: 'partial',
        //   _trailer: '',
        //   _removedConnection: false,
        //   _last: true,
        //   insecureHTTPParser: undefined,
        //   maxHeadersCount: null,
        //   method: 'GET',
        //   protocol: 'https:'
      },
      data: { ...dataFromApi },
      ...urlAndDataRest, // { ...urlAndDataHashes, dataToCache: '[Duplicate]' },
      responseFromApi: false,
      responseFromCache: true,
    };

    // $ WRITE TO CACHE ――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    await jsonCache.set(URL_HSH, responseToCache);

    // !! RETURN VALUE FROM API ――――――――――――――――――――――――――――――――――――――――――――――――$>

    myRedis.disconnect();
    responseFromApi.responseFromApi = true;
    responseFromApi.responseFromCache = false;
    return ech0(responseFromApi);
  }
}

export { RedisProxyHandlerClass };

export function redisProxyHandler(
  mainProxyHandlerOptions: ProxyHandlerOptions = {},
) {
  return function clientHandlerFactory(credentials?: Credentials) {
    const client: ClientStatic = getHttpClient();
    const newProxy: ClientHandlerFactory = {};

    newProxy.activate = (proxyHandlerOptions: ProxyHandlerOptions) =>
      new Proxy(
        client,
        new RedisProxyHandlerClass({
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
//   // $ Reflect.apply  ――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
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
//   // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
//   const isInCache: boolean = echo1(
//     "this.tedis.command('hgetall', URL_HSH): ",
//     await this.tedis.command('hgetall', URL_HSH),
//   );
//   const initialValue: any = {};
//   if (isInCache) {
//     // if (process.exit()) { };
//     const parsed = id0(
//       parser<any[]>(await this.tedis.command('HGETALL', URL_HSH)),
//     );
//     for (let i = 0; i < parsed.length; i += 2) {
//       initialValue[parser((parsed[i] as string).split(':')[0])] =
//         parsed[i + 1];
//     }
//   }
//   ech0(initialValue);
//   // $ APPLY REFLEXCTION ON TARGET ―――――――――――――――――――――――――――――――――――――――――$>
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
//   void0(await this.tedis.command('HSET', myKey, ...hash));
//   void0(await this.tedis.command('EXPIRE', myKey, 30));
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
//   // + CATCH ERROR ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
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
//         'async apply(target: ClientStatic, thisArg: any, argArray?: any): Promise<any>',
//       sideEffects: 'void echo(proxyData); void0(this.tedis);',
//     },
//     ...getUrlAndDataHashes(urlPath, data),
//   };
// }
