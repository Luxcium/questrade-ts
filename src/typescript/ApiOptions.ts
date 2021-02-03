import { Credentials, Logger, ProxyFactory_ } from '.';

type GetToken = () => string;
type KeyFile = string;
type SeedToken = string;
interface ApiOptions {
  accountNumber?: string | number;
  accountCallsPerHour?: number;
  accountCallsPerSecond?: number;
  apiVersion?: string;
  caching?: boolean;
  debug?: number;
  fromCache?: boolean;
  keyDir?: string;
  keyFile?: string;
  marketCallsPerHour?: number;
  marketCallsPerSecond?: number;
  practiceAccount?: boolean;
  testing?: boolean;
  token: SeedToken | KeyFile | GetToken;
  errorloger?: Logger;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
}

export type { ApiOptions, GetToken, KeyFile, SeedToken };
