import { ClientHandlerFactory, Credentials, IQuestradeAPIOptions } from '..';
import { Logger } from '../typescript';

export type RedeemOptions = {
  refreshToken: string | IQuestradeAPIOptions;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ClientHandlerFactory;
};
