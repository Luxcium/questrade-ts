import { Credentials } from '../../../typescript';

export const _defaultCredentials: Credentials = {
  accessToken: '',
  accountNumber: '',
  apiServer: '',
  apiUrl: '',
  apiVersion: 'v1',
  authUrl: '',
  expiresAt: undefined,
  tokenExpiration: undefined,
  expiresIn: 0,
  keyDir: './keys',
  keyFile: '',
  practice: false,
  refreshToken: '',
  seedToken: '',
  serverTime: undefined,
  tokenType: '',
  // config_:null = _config;
  // response_:null = response;
  // configurl_:null = `${_config.url}`.split('questrade.com/')[1];

  // urlTimeUTC:null = new Date(credentials.response_.headers.date);
  toValue() {
    return JSON.parse(
      JSON.stringify({
        ...this,
        config_: {
          ...this.config_,
          headers: {
            ...this.config_?.headers,
            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
        },
        response_: {
          ...this.response_,
          headers: {
            ...this.response_?.headers,

            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          config: {
            ...this.response_?.config,
            // ...this.response_?.config?.headers,
            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          request: {
            ...this.response_?.request,
            res: '[IncomingMessage]',
            _redirectable: '[Writable]',
            agent: '[Agent]',
            socket: '[TLSSocket]',
            _header: '[HTTP Header Fields]',
          },
        },
        accessToken: '[string:Private]',
        keyFile: './keys/[Private]',
        refreshToken: '[string:Private]',
        seedToken: '[string:Private]',
      }),
    );
  },
  toString(indent: string | number | undefined = 4) {
    // ?.Authorization
    return JSON.stringify(
      {
        ...{
          ...this,

          config_: {
            ...this.config_,
            headers: {
              ...this.config_?.headers,
              Authorization: `${(
                (this.config_?.headers?.Authorization as string) ?? ''
              ).slice(0, 15)} [Redacted] ...`,
            },
          },
        },
        response_: {
          ...this.response_,
          headers: {
            ...this.response_?.headers,

            Authorization: `${(
              (this.config_?.headers?.Authorization as string) ?? ''
            ).slice(0, 15)} [Redacted] ...`,
          },
          request: {
            ...this.response_?.request,
            res: ' [IncomingMessage]',
            _redirectable: '[Writable]',
            agent: '[Agent]',
            socket: '[TLSSocket]',
            _header: '[HTTP Header Fields]',
          },
          ...{
            ...this.response_?.config,
            config: {
              ...this.response_?.config?.headers,
              headers: {
                // ...this.response_?.config?.headers?.Authorization,

                Authorization: `${
                  (this.config_?.headers?.Authorization as string).slice(
                    0,
                    15,
                  ) ?? ''
                } [Redacted] ...`,
              },
            },
          },
        },
        accessToken: '[string:Private]',
        keyFile: './keys/[Private]',
        refreshToken: '[string:Private]',
        seedToken: '[string:Private]',
      },
      null,
      indent,
    );
  },
};
