import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '../../../../utils';
import { sideEffects } from '../..';
// import { echo } from '../..';
import { ClientStatic } from '../../types';
import { clientProxyHandlerFactoryFunction } from '../core/client-proxy-handler-factory-function';
import { ReflexionLoggerProxyHandlerAbstractClass } from '../core/reflexion-logger-proxy-handler-abstarct-class';

const { echo } = sideEffects;

class clientConsoleLogHashesHandlerClass
  extends ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>
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
      clientConfig: argArray[0],
      proxy: {
        ...this.proxy,
        handlerMethod:
          'async apply(target: ClientStatic, thisArg: any, argArray?: any): Promise<any>',
        sideEffects: 'console.log',
      },
      ...creatUrlAndDataHashes(urlPath, data),
    };

    // +SIDE EFFECTS ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    void echo(proxyData);

    // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    return returnValue;
  }
}

export const httpHashLoggerClientProxyHandler = clientProxyHandlerFactoryFunction()(
  new clientConsoleLogHashesHandlerClass(),
);
