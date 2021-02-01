import { ApiOptions, Credentials, ProxyFactory_ } from '../other';
import { Logger } from '../typescript';

export type RedeemOptions = {
  refreshToken: string | ApiOptions;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
};
