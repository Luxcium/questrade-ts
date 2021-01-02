import axios, { AxiosStatic } from 'axios';

import { ProxyReflexionLoggerFunctionHandler } from './proxy-reflexion-logger-function-handler';

export const axiosProxy = (handler: ProxyHandler<AxiosStatic>) =>
  new Proxy(axios, handler);
export class AxiosHandlerClass
  extends ProxyReflexionLoggerFunctionHandler<AxiosStatic>
  implements ProxyHandler<AxiosStatic> {}

export const axiosHandler = new AxiosHandlerClass();

export const axiosProxyHandler = axiosProxy(axiosHandler);

export default axiosProxyHandler;
