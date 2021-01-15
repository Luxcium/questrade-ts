import { Tedis } from 'tedis';

import {
  creatUrlAndDataHashes,
  getQtUrlPathFromArgs,
  id0,
  parser,
  void0,
} from '../../../../utils';
import { sideEffects } from '../..';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
  ProxyHandlerOptions,
} from '../../types';
import { clientProxyHandlerFactory } from '../core/client-proxy-handler-factory-function';
import { ReflexionLoggerProxyHandlerAbstractClass } from '../core/reflexion-logger-proxy-handler-abstarct-class';

const { ech0, echo } = sideEffects;
class redisClientProxyHandlerClass<T extends Function = ClientStatic>
  extends ReflexionLoggerProxyHandlerAbstractClass<T>
  implements ProxyHandler<T> {
  private tedis: Tedis;
  constructor(
    tedisInstance: Tedis,
    protected handlerOptions: ProxyHandlerOptions,
  ) {
    super(handlerOptions);
    this.tedis = tedisInstance;
  }

  protected proxy = {
    class: 'redisClientProxyHandlerClass',
    extends: 'ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>',
    implements: 'ProxyHandler<ClientStatic>',
  };

  async apply(target: T, thisArg: any, argArray?: any): Promise<any> {
    if (this.handlerOptions.debug === true) {
      void echo<unknown>(
        'PROXY:',
        '!!→ apply',
        'target →',
        target,
        'thisArg →',
        thisArg,
        'argArray →',
        argArray,
      );
      echo('redisClientProxyHandlerClass');
    }
    const returnValue = Reflect.apply(target, thisArg, argArray);
    const urlPath = getQtUrlPathFromArgs(argArray);
    const data = `${JSON.stringify((await returnValue).data ?? null)}`;

    const proxyData = {
      clientConfig: argArray[0],
      proxy: {
        ...this.proxy,
        handlerMethod:
          'async apply(target: ClientStatic, thisArg: any, argArray?: any): Promise<any>',
        sideEffects: 'void echo(proxyData); void0(this.tedis);',
      },
      ...creatUrlAndDataHashes(urlPath, data),
    };
    try {
      // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
      void proxyData;
      void this.tedis;
      void ech0(proxyData.path);

      // Data exists in Redis ?
      // Yes: Get Data from Redis !
      // No: Get Data from ApiClient !
      //      Save Data in Redis !

      const myKey = proxyData.URL_HSH;
      const hash = [
        'URL_HSH:',
        proxyData.URL_HSH,
        'path:',
        proxyData.path,
        'DATA_HSH:',
        proxyData.DATA_HSH,
        'data:',
        proxyData.data,
        'URLDATA_HSH:',
        proxyData.URLDATA_HSH,
      ];

      // const convertArrayToObject = (array:any[], key:any) => {
      //   return array.reduce((obj: any, item: any, currentIndex,) => {
      //     array.length
      //     return {
      //       ...obj,
      //       [item[key]]: item,
      //     };
      //   }, initialValue);
      // };

      // void convertArrayToObject
      void0(await this.tedis.command('HSET', myKey, ...hash));
      void0(await this.tedis.command('EXPIRE', myKey, 30));
      echo<any>(myKey, await this.tedis.command('TTL', myKey));
      ech0(await this.tedis.command('TTL', myKey));

      const parsed = id0(
        parser<any[]>(await this.tedis.command('HGETALL', myKey)),
      );
      const initialValue: any = {};
      for (let i = 0; i < parsed.length; i += 2) {
        initialValue[parser((parsed[i] as string).split(':')[0])] =
          parsed[i + 1];
      }
      // const returnedData =

      ech0(parser(initialValue['data']));
      // await this.tedis.command('HSET', ...hash);
      // const alternativeReturnValue = {
      //   data: returnedData,
      //   status: 200,
      //   statusText: 'OK',
      // };
      // void alternativeReturnValue;
      //      Then return the Data ...
      const response: ClientResponse = await returnValue;
      /*
export interface ClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: ClientRequestConfig;
  request?: any;
}
  echo(response.headers['strict-transport-security']);
  echo(response.headers['x-ratelimit-remaining']);
  echo(response.headers['x-ratelimit-reset']);
  echo(response.headers['content-type']);
  echo(response.headers['content-length']);
       */
      // echo(response);
      echo(response.status);
      echo(response.statusText);
      echo(response.headers);
      echo(response.headers['strict-transport-security']);
      echo(response.headers['x-ratelimit-remaining']);
      echo(response.headers['x-ratelimit-reset']);
      echo(response.headers['content-type']);
      echo(response.headers['content-length']);
      echo(response.config as ClientRequestConfig);
      echo((response.config as ClientRequestConfig).headers);
      echo((response.config as ClientRequestConfig).url);
      echo((response.config as ClientRequestConfig).method);
      echo((response.config as ClientRequestConfig).headers.Accept);
      echo((response.config as ClientRequestConfig).headers.Authorization);
      echo((response.config as ClientRequestConfig).headers.location);
      // echo(response.headers['x-ratelimit-remaining']);
      // echo(response.headers['x-ratelimit-reset']);
      // echo(response.request);
      // echo(response.data);
      return returnValue;
      // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    } catch (error) {
      void echo(error);
      return { data: null };
    }
  }

  defineProperty(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor,
  ): any {
    if (this.handlerOptions.debug === true) {
      void echo<unknown>(
        'PROXY:',
        '!!→ defineProperty',
        'target →',
        target,
        'p →',
        p,
        'attributes →',
        attributes,
      );

      echo('redisClientProxyHandlerClass');
    }
    return Reflect.defineProperty(target, p, attributes);
  }

  getOwnPropertyDescriptor(
    target: T,
    p: PropertyKey,
  ): PropertyDescriptor | undefined {
    if (this.handlerOptions.debug === true) {
      void echo<unknown>(
        'PROXY:',
        '!!→ getOwnPropertyDescriptor',
        'target →',
        target,
        'p →',
        p,
      );

      echo('redisClientProxyHandlerClass');
    }
    return Reflect.getOwnPropertyDescriptor(target, p);
  }

  set(target: T, p: PropertyKey, value: any, receiver: any): boolean {
    if (this.handlerOptions.debug === true) {
      void echo<unknown>(
        'PROXY:',
        '!!→ set',
        'target →',
        target,
        'p →',
        p,
        'value →',
        value,
        'receiver →',
        receiver,
      );

      echo('redisClientProxyHandlerClass');
    }

    return Reflect.set(target, p, value, receiver);
  }

  get(target: T, p: PropertyKey, receiver: any): any {
    if (this.handlerOptions.debug === true) {
      void echo<unknown>(
        'PROXY:',
        '!!→ get',
        'target →',
        target,
        'p →',
        p,
        'receiver →',
        receiver,
      );

      echo('redisClientProxyHandlerClass');
    }

    return Reflect.get(target, p, receiver);
  }
}

export const redisClientProxyHandler = (
  tedisInstance: Tedis,
  mainProxyHandlerOptions: ProxyHandlerOptions = {},
) =>
  clientProxyHandlerFactory()(
    (specificProxyHandlerOptions: ProxyHandlerOptions) =>
      new redisClientProxyHandlerClass(tedisInstance, {
        ...mainProxyHandlerOptions,
        ...specificProxyHandlerOptions,
      }),
    mainProxyHandlerOptions.httpDataEndPointConnector ?? true,
    mainProxyHandlerOptions.oAuthHttpCredentials ?? false,
  );

// void echo('URL_HASH_HEX:', proxyData.URL_HASH_HEX);
// void echo('DATA_HASH_HEX:', proxyData.DATA_HASH_HEX);
// void echo('URLDATA_HEX:', proxyData.URLDATA_HEX);
// void echo('URL_PATH:', proxyData.URL_PATH);
// void ech0('no redis write');

// void0(
//   await this.tedis.command(
//     'PFADD',
//     `count:${proxyData.URL_HASH_HEX}:data:unique`,
//     `${proxyData.DATA_HASH_HEX}`,
//   ),
// );

// void0(
//   await this.tedis.command(
//     'PFADD',
//     `count:${proxyData.URL_HASH_HEX}:data:same:${proxyData.URLDATA_HEX}`,
//     `${Date.now()}`,
//   ),
// );
/*
// TTL mykey
        setTimeout(async () => {
          echo<any>(myKey, await this.tedis.command('TTL', myKey));
        }, 1000);

        setTimeout(async () => {
          echo<any>(myKey, await this.tedis.command('TTL', myKey));
        }, 2000);
        setTimeout(async () => {
          echo<any>(myKey, await this.tedis.command('TTL', myKey));
        }, 3000);
 */
