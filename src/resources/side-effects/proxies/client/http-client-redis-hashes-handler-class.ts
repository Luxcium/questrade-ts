import { Tedis } from 'tedis';

import { creatUrlAndDataHashes, getQtUrlPathFromArgs } from '../../../../utils';
import { sideEffects } from '../../default-behaviour';
import { ClientStatic } from '../../types';
import { ReflexionLoggerProxyHandlerAbstractClass } from '..';
import { clientProxyHandlerFactoryFunction } from '../core/client-proxy-handler-factory-function';

const { echo, ech0 } = sideEffects;
class HttpRedisClientHandlerClass
  extends ReflexionLoggerProxyHandlerAbstractClass<ClientStatic>
  implements ProxyHandler<ClientStatic> {
  protected proxy = {
    class: 'httpClientRedisHandlerClass',
    extends: 'ProxyReflexionLoggerFunctionHandler<ClientStatic>',
    implements: 'ProxyHandler<ClientStatic>',
  };
  constructor(private tedis: Tedis) {
    super();
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
    // const tedis = this.tedis;
    const clientConfig = proxyData.clientConfig;
    const urlHashHex = proxyData.URL_HASH_HEX;
    const urlHashB62 = proxyData.URL_HASH_B62;
    const dataHashHex = proxyData.DATA_HASH_HEX;
    const dataHashB62 = proxyData.URL_HASH_B62;
    //  const urlPath = proxyData.URL_PATH ;
    //  const data = proxyData.DATA ;

    await this.tedis.hmset(proxyData.URL_HASH_HEX ?? 'null', {
      data,
      urlPath,
      clientConfig,
      urlHashHex,
      urlHashB62,
      dataHashHex,
      dataHashB62,
    });
    ech0(await this.tedis.keys('*'));

    // +RETURN VALUE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――$>
    return returnValue;
  }
}

export const httpRedisClientProxyHandler = (tedis: Tedis) =>
  clientProxyHandlerFactoryFunction()(new HttpRedisClientHandlerClass(tedis));

/*


  The types returned by 'ownKeys(...)' are incompatible between these types.
    Type '(string | number | symbol)[]' is not assignable to type 'ArrayLike<string | symbol>'.
      Index signatures are incompatible.
        Type 'string | number | symbol' is not assignable to type 'string | symbol'.
          Type 'number' is not assignable to type 'string | symbol'.ts(2420)

proxy: {
    class: 'httpClientRedisHandlerClass',
    extends: 'ProxyReflexionLoggerFunctionHandler<ClientStatic>',
    implements: 'ProxyHandler<ClientStatic>',
    sideEffects: 'console.log'
  },
  clientConfig: {
    url: 'https://login.questrade.com/oauth2/token',
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: 'xXab-ifqw8qD2gAm67oBiHEBdw0Wc8310'
    }
  },
  DATA: '{"access_token":"YOczxAENQhIvcA-O8eibIKSD-Et2NV290","api_server":"https://api05.iq.questrade.com/","expires_in":1800,"refresh_token":"dwZ0NDwEqJkmiEeBIAJzchotTa5KAWSc0","token_type":"Bearer"}',
  URL_PATH: '/oauth2/token',
  URL_HASH_HEX: 'URL:A4112053968EEF8F',
  URL_HASH_B62: 'URL:B62:pBEgU5aO',
  DATA_HASH_HEX: 'DATA:408AF298111D06E8',
  DATA_HASH_B62: 'DATA:B62QIrymBEd'
    handlerMethod: 'async apply(target: ClientStatic, thisArg: any, argArray?: any): Promise<any>',
 */
