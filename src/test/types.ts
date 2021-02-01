import { ApiOptions, Credentials, Logger, ProxyFactory_ } from '../typescript';

export type RedeemOptions = {
  refreshToken: string | ApiOptions;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
};
