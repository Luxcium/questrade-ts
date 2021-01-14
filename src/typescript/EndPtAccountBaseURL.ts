import { ClientStaticHandlerFactory, Credentials } from '.';

export type EndPtAccountBaseURL = (
  getCredAcctProp: (
    credentials: Credentials,
    proxy?: ClientStaticHandlerFactory,
  ) => string,
) => (
  urlSep: () => string,
) => (
  acctUrlStr: () => string,
) => (
  credentials: Credentials,
  proxy?: ClientStaticHandlerFactory,
) => (accountEndpoint: string) => string;
