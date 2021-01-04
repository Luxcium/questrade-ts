import { AxiosStatic } from 'axios';

import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '..';
import { axiosProxyFactory } from './axios-proxy-factory';
import { ProxyReflexionLoggerFunctionHandler } from './proxy-reflexion-logger-function-handler';

class AxiosConsoleLogHashesHandlerClass
  extends ProxyReflexionLoggerFunctionHandler<AxiosStatic>
  implements ProxyHandler<AxiosStatic> {
  protected proxy = {
    class: 'AxiosHandlerClass',
    extends: 'ProxyReflexionLoggerFunctionHandler<AxiosStatic>',
    implements: 'ProxyHandler<AxiosStatic>',
  };
  async apply(target: AxiosStatic, thisArg: any, argArray?: any): Promise<any> {
    const returnValue = Reflect.apply(target, thisArg, argArray);
    const urlPath = getQtUrlPathFromArgs(argArray);
    const data = `${JSON.stringify((await returnValue).data ?? null)}`;
    const proxyData = {
      proxy: {
        ...this.proxy,
        handlerMethod:
          'async apply(target: AxiosStatic, thisArg: any, argArray?: any): Promise<any>',
        sideEffects: 'console.log',
      },
      axiosConfig: argArray[0],
      ...creatUrlAndDataHashes(urlPath, data),
    };

    // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    console.log(proxyData); // TODO: List the side effects

    // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    return returnValue;
  }
}

export const axiosConsoleLogHashesProxyHandler = axiosProxyFactory(
  new AxiosConsoleLogHashesHandlerClass(),
);
