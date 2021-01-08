import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '../../utils';
import { sideEffects } from '../side-effects/default-behaviour';
import { ClientStatic } from '../side-effects/types';
import { clientProxyFactory } from './http-client-proxy-factory';
import { ProxyReflexionLoggerFunctionHandler } from './proxy-reflexion-logger-function-handler';

const { echo } = sideEffects;

class httpClientRedisHandlerClass
  extends ProxyReflexionLoggerFunctionHandler<ClientStatic>
  implements ProxyHandler<ClientStatic> {
  protected proxy = {
    class: 'httpClientRedisHandlerClass',
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

export const clientConsoleLogHashesProxyHandler2 = clientProxyFactory(
  new httpClientRedisHandlerClass(),
);

/*


  The types returned by 'ownKeys(...)' are incompatible between these types.
    Type '(string | number | symbol)[]' is not assignable to type 'ArrayLike<string | symbol>'.
      Index signatures are incompatible.
        Type 'string | number | symbol' is not assignable to type 'string | symbol'.
          Type 'number' is not assignable to type 'string | symbol'.ts(2420)


 */
