import { Credentials, IQuestradeAPIOptions, ProxyFactory_ } from '..';
import { Logger } from '../typescript';

export type RedeemOptions = {
  refreshToken: string | IQuestradeAPIOptions;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
};
