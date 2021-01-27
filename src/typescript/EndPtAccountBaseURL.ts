import { Credentials, ProxyFactory_ } from '.';

export type EndPtAccountBaseURL = (
  getCredAcctProp: (credentials: Credentials, proxy?: ProxyFactory_) => string,
) => (
  urlSep: () => string,
) => (
  acctUrlStr: () => string,
) => (
  credentials: Credentials,
  proxy?: ProxyFactory_,
) => (accountEndpoint: string) => string;
