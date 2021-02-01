import { Credentials, Logger, ProxyFactory_ } from '.';

type GetToken = () => string;
type KeyFile = string;
type SeedToken = string;
interface ApiOptions {
  account?: string | number;
  accountCallsPerHour?: number;
  accountCallsPerSecond?: number;
  apiVersion?: string;
  caching?: boolean;
  keyDir?: string;
  keyFile?: string;
  marketCallsPerHour?: number;
  marketCallsPerSecond?: number;
  practiceAccount?: boolean;
  test?: boolean;
  token: SeedToken | KeyFile | GetToken;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
}

// type ApiOptions = IQuestradeAPIOptions | SeedToken | KeyFile | GetToken;

export type { ApiOptions, GetToken, KeyFile, SeedToken };
