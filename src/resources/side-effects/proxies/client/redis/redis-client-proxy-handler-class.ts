import { Tedis } from 'tedis';

import { Credentials } from '../../../../../typescript';
import {
  getQtUrlPathFromArgs,
  getUrlAndDataHashes,
  getUrlHash,
  id0,
  parser,
  void0,
} from '../../../../../utils';
import { ech0, sideEffects } from '../../..';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
  ProxyHandlerOptions,
} from '../../../types';
import { ReflexionLoggerProxyHandlerAbstractClass } from '../../core/reflexion-logger-proxy-handler-abstarct-class';

const { echo } = sideEffects;

class redisClientProxyHandlerClass<T extends Function = ClientStatic>
  extends ReflexionLoggerProxyHandlerAbstractClass<T>
  implements ProxyHandler<T> {
  private tedis: Tedis;
  constructor(
    tedisInstance: Tedis,
    protected handlerOptions: ProxyHandlerOptions,
    protected credentials?: Credentials,
  ) {
    super(handlerOptions);
    this.tedis = tedisInstance;
  }

  protected async applyTargetReflexion(
    target: T,
    thisArg: any,
    argArray?: any,
  ) {
    const urlPath = getQtUrlPathFromArgs(argArray);
    // $ Reflect.apply  ――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    const returnValue = Reflect.apply(target, thisArg, argArray);
    const data = `${JSON.stringify((await returnValue).data ?? null)}`;
    const proxyData = this._proxyData(urlPath, data, argArray);
    const response: ClientResponse = await returnValue;

    return { proxyData, response, returnValue, urlPath };
  }

  async apply(target: T, thisArg: any, argArray?: any): Promise<any> {
    const urlPath = getQtUrlPathFromArgs(argArray);
    const { URL_HSH } = getUrlHash(urlPath);

    // getDataHash,
    // getUDatagram,
    // getUrlAndDataHashes,
    // getUrlHashe,
    try {
      // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>

      // $ READ FROM TEDIS ―――――――――――――――――――――――――――――――――――――――――――――――――――――$>
      const isInCache: boolean =
        (await this.tedis.command('hgetall', URL_HSH)) === 1;

      const initialValue: any = {};

      if (isInCache) {
        const parsed = id0(
          parser<any[]>(await this.tedis.command('HGETALL', URL_HSH)),
        );

        for (let i = 0; i < parsed.length; i += 2) {
          initialValue[parser((parsed[i] as string).split(':')[0])] =
            parsed[i + 1];
        }
      }
      ech0(initialValue);

      // $ APPLY REFLEXCTION ON TARGET ―――――――――――――――――――――――――――――――――――――――――$>
      const {
        proxyData,
        response,
        returnValue,
      } = await this.applyTargetReflexion(target, thisArg, argArray);
      // $ Write to Tedis  ―――――――――――――――――――――――――――――――――――――――――――――――――――――$>

      // echo(response.status);
      // echo(response.statusText);
      // echo(response.headers['content-type']);
      // echo(response.headers['content-length']);
      // echo(response.headers['strict-transport-security']);
      if (this.credentials) {
        this.credentials.xRatelimitRemaining = Number(
          response.headers['x-ratelimit-remaining'],
        );
        this.credentials.xRatelimitReset = Number(
          response.headers['x-ratelimit-reset'],
        );
        this.credentials.fromCache = true;
      }

      void proxyData;
      void this.tedis;
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
        'UDATAGRAM:',
        proxyData.UDATAGRAM,
        'status:',
        response.status,
        'statusText:',
        response.statusText,
        'headers_type',
        response.headers['content-type'],
        'headers_length',
        response.headers['content-length'],
        'url:',
        (response.config as ClientRequestConfig).url,
        'urlPath:',
        urlPath,
      ];
      //*
      const tempResponse = {
        response: {
          clientRequest: {
            /* any */
          },
          config: {
            url: 'https://api06.iq.questrade.com/v1/accounts',
          },
          data: {
            /* any */
          },
          headers: {
            'content-length': '152',
            'content-type': 'application/json; charset=utf-8',
            'date': 'Tue, 19 Jan 2021 06:09:06 GMT',
            'x-ratelimit-remaining': '29970',
            'x-ratelimit-reset': '1611038234',
          },
          status: 418,
          statusText: 'I’M A TEAPOT',
        },
      };

      //*/
      void tempResponse;
      void0(await this.tedis.command('HSET', myKey, ...hash));
      void0(await this.tedis.command('EXPIRE', myKey, 30));
      // echo<any>(myKey, await this.tedis.command('TTL', myKey));
      // ech0(await this.tedis.command('TTL', myKey));

      // $ RETURN VALUE  ―――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
      if ((await returnValue)?.data?.accounts) {
        ech0((await returnValue)?.data?.accounts);
      }
      return ech0({
        ...(await returnValue),
        config: {},
        data: {
          ...(await returnValue)?.data,
          accounts: [
            {
              clientAccountType: 'Individual',
              isBilling: true,
              isPrimary: false,
              number: '51648972',
              status: 'Active',
              type: 'TFSA',
            },
          ],
          time: '2011-11-11T11:11:11.282000-05:00',
          userId: 126_691,
        },
        headers: {},
        request: {},
      });
      // return returnValue;

      // + CATCH ERROR ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    } catch (error) {
      void echo(error);
      return { data: null };
    }
  }

  protected proxy = {
    class: 'redisClientProxyHandlerClass',
    extends: 'ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>',
    implements: 'ProxyHandler<ClientStatic>',
  };

  private _proxyData(urlPath: string, data: string, argArray?: any) {
    return {
      clientConfig: argArray[0],
      proxy: {
        ...this.proxy,
        handlerMethod:
          'async apply(target: ClientStatic, thisArg: any, argArray?: any): Promise<any>',
        sideEffects: 'void echo(proxyData); void0(this.tedis);',
      },
      ...getUrlAndDataHashes(urlPath, data),
    };
  }
}

export { redisClientProxyHandlerClass };
