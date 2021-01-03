import axios, { AxiosStatic } from 'axios';

export const axiosProxyFactory = (
  handler: ProxyHandler<AxiosStatic>,
): AxiosStatic => {
  return new Proxy(axios, handler);
};
