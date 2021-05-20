import { Credentials, Logger, ProxyFactory_, VebosityLevel } from '.';

type GetToken = () => string;
type KeyFile = string;
type SeedToken = string;
interface ApiOptions {
  accountNumber?: string | number;
  accountCallsPerHour?: number;
  accountCallsPerSecond?: number;
  apiVersion?: string;
  caching?: boolean;
  debugVebosity?: VebosityLevel;
  fromCache?: boolean;
  keyDir?: string;
  keyFile?: string;
  marketCallsPerHour?: number;
  marketCallsPerSecond?: number;
  practiceAccount?: boolean;
  testing?: boolean;
  token: SeedToken | KeyFile | GetToken;
  errorloger?: Logger;

  credentials?: Credentials;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
}

export type { ApiOptions, GetToken, KeyFile, SeedToken };
