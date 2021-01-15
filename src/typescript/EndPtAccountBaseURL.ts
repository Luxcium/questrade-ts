import { ClientHandlerFactory, Credentials } from '.';

export type EndPtAccountBaseURL = (
  getCredAcctProp: (
    credentials: Credentials,
    proxy?: ClientHandlerFactory,
  ) => string,
) => (
  urlSep: () => string,
) => (
  acctUrlStr: () => string,
) => (
  credentials: Credentials,
  proxy?: ClientHandlerFactory,
) => (accountEndpoint: string) => string;
