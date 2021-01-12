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
class redisClientProxyHandlerClass<T extends Function = ClientStatic>
  extends ReflexionLoggerProxyHandlerAbstractClass<T>
  implements ProxyHandler<T> {
  protected proxy = {
    class: 'redisClientProxyHandlerClass',
    extends: 'ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>',
    implements: 'ProxyHandler<ClientStatic>',
  };

  private tedis: Tedis;
  constructor(tedisInstance: Tedis, protected debug: boolean = false) {
    super(debug);
    this.tedis = tedisInstance;
  }

  defineProperty(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor,
  ): any {
    if (this.debug === true) {
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
    if (this.debug === true) {
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
    if (this.debug === true) {
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
    if (this.debug === true) {
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

  async apply(target: T, thisArg: any, argArray?: any): Promise<any> {
    if (this.debug === true) {
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
      // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
      void proxyData;
      void echo('URL_HASH_HEX:', proxyData.URL_HASH_HEX);
      void0(await this.tedis.set(proxyData.URL_HASH_HEX, proxyData.DATA));
      void0(
        await this.tedis.command(
          `PFADD ${proxyData.URLDATA_HEX} ${proxyData.DATA_HASH_HEX}`,
        ),
      );
      // void echo('this.tedis.get', await this.tedis.get(proxyData.URL_HASH_HEX));
      // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
      return returnValue;
    } catch (error) {
      void echo(error);
      return { data: null };
    }
  }
}

export const redisClientProxyHandler = (tedisInstance: Tedis) =>
  clientProxyHandlerFactoryFunction()(
    () => new redisClientProxyHandlerClass(tedisInstance),
    false,
    false,
  );
