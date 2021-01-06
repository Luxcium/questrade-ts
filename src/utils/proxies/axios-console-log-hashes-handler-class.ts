import { sideEffects } from '../../resources/side-effects/default-behaviour';
import { ClientStatic } from '../../resources/side-effects/types';
import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '..';
import { clientProxyFactory } from './axios-proxy-factory';
import { ProxyReflexionLoggerFunctionHandler } from './proxy-reflexion-logger-function-handler';

const { echo } = sideEffects;

class AxiosConsoleLogHashesHandlerClass
  extends ProxyReflexionLoggerFunctionHandler<ClientStatic>
  implements ProxyHandler<ClientStatic> {
  protected proxy = {
    class: 'AxiosHandlerClass',
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
      axiosConfig: argArray[0],
      ...creatUrlAndDataHashes(urlPath, data),
    };

    // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    void echo(proxyData);

    // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    return returnValue;
  }
}

export const axiosConsoleLogHashesProxyHandler = clientProxyFactory(
  new AxiosConsoleLogHashesHandlerClass(),
);
