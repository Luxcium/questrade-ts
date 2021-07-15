import { Credentials, ProxyFactory_ } from '.';

export type EndPtAccountBaseURL = (
  getCredAcctProp: (
    credentials: Credentials,
    proxy: ProxyFactory_ | null,
  ) => string,
) => (
  urlSep: () => string,
) => (
  acctUrlStr: () => string,
) => (
  credentials: Credentials,
  proxy: ProxyFactory_ | null,
) => (accountEndpoint: string) => string;
