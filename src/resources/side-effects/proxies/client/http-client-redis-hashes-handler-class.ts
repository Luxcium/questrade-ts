import { Tedis } from 'tedis';

import {
  creatUrlAndDataHashes,
  getQtUrlPathFromArgs,
  void0,
} from '../../../../utils';
import { sideEffects } from '../..';
import { ClientStatic } from '../../types';
import { clientProxyHandlerFactoryFunction } from '../core/client-proxy-handler-factory-function';
import { ReflexionLoggerProxyHandlerAbstractClass } from '../core/reflexion-logger-proxy-handler-abstarct-class';

const { echo } = sideEffects;

class redisClientProxyHandlerClass
  extends ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>
  implements ProxyHandler<ClientStatic> {
  protected proxy = {
    class: 'redisClientProxyHandlerClass',
    extends: 'ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>',
    implements: 'ProxyHandler<ClientStatic>',
  };

  private tedis: Tedis;
  constructor(tedisInstance: Tedis) {
    super();
    this.tedis = tedisInstance;
  }
  get(target: any, p: any, receiver: any) {
    void echo<any>('Proxy: → Get', this.proxy);
    void [target, p, receiver];
  }
  async apply(
    target: ClientStatic,
    thisArg: any,
    argArray?: any,
  ): Promise<any> {
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
      // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
      void echo(proxyData);
      void0(await this.tedis.set(proxyData.URL_HASH_HEX, proxyData.DATA));
      void0(
        await this.tedis.command(
          `PFADD ${proxyData.URLDATA_HEX} ${proxyData.DATA_HASH_HEX}`,
        ),
      );
      void echo('this.tedis.get', await this.tedis.get(proxyData.URL_HASH_HEX));
      // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
      return returnValue;
    } catch {
      // void echo(error);
      return { data: null };
    }
  }
}

export const httpRedisClientProxyHandler = (tedisInstance: Tedis) =>
  clientProxyHandlerFactoryFunction()(
    new redisClientProxyHandlerClass(tedisInstance),
    true,
    false,
  );
