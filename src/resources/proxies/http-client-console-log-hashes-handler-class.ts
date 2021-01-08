import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '../../utils';
import { sideEffects } from '../side-effects/default-behaviour';
import { ClientStatic } from '../side-effects/types';
import { clientProxyFactory } from './http-client-proxy-factory';
import { ProxyReflexionLoggerFunctionHandler } from './proxy-reflexion-logger-function-handler';

const { echo } = sideEffects;

class clientConsoleLogHashesHandlerClass
  extends ProxyReflexionLoggerFunctionHandler<ClientStatic>
  implements ProxyHandler<ClientStatic> {
  protected proxy = {
    class: 'clientConsoleLogHashesHandlerClass',
    extends: 'ProxyReflexionLoggerFunctionHandler<ClientStatic>',
    implements: 'ProxyHandler<ClientStatic>',
  };
  async apply(
    target: ClientStatic,
    thisArg: any,
    argArray?: any,
  ): Promise<any> {
    const returnValue = Reflect.apply(target, thisArg, argArray);
    const urlPath = getQtUrlPathFromArgs(argArray);
    const data = `${JSON.stringify((await returnValue).data ?? null)}`;
    const proxyData = {
      proxy: {
        ...this.proxy,
        handlerMethod:
          'async apply(target: ClientStatic, thisArg: any, argArray?: any): Promise<any>',
        sideEffects: 'console.log',
      },
      clientConfig: argArray[0],
      ...creatUrlAndDataHashes(urlPath, data),
    };

    // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    void echo(proxyData);

    // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    return returnValue;
  }
}

export const httpClientConsoleLogHashesProxyHandler = clientProxyFactory(
  new clientConsoleLogHashesHandlerClass(),
);
