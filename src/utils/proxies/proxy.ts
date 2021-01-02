import axios, { AxiosStatic } from 'axios';
import { ProxyReflexionLoggerFunctionHandler } from '..';

export const axiosProxyHandler = {
  // _oAuthAxiosCredentials
};
// declare class ProxyReflexionLoggerFunctionHandler{};
export const axiosProxy = (handler: ProxyHandler<AxiosStatic>) =>
  new Proxy(axios, handler);
export class AxiosProxy extends ProxyReflexionLoggerFunctionHandler<AxiosStatic> {}
