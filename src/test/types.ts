import { Credentials, IQuestradeAPIOptions, ProxyFactory_ } from '../other';
import { Logger } from '../typescript';

export type RedeemOptions = {
  refreshToken: string | IQuestradeAPIOptions;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
};
