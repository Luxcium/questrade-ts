import axios from 'axios';
import { config } from 'dotenv';
import { Tedis } from 'tedis';

import { Credentials, IRefreshCreds, QuestradeAPIOptions } from '../../types';
import { _validateToken } from './auth/_validateToken';
import { _writeToken } from './auth/_writeToken';
import {
  ClientPromise,
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from './types';

export const sideEffects = {
  errorlog<T = unknown>(...args: T[]): T[] {
    console.error(...args);
    return args;
  },

  warnlog<T = unknown>(...args: T[]): T[] {
    console.warn(...args);
    return args;
  },

  infolog<T = unknown>(...args: T[]): T[] {
    console.info(...args);
    return args;
  },

  tablelog<T = unknown>(...args: T[]): T[] {
    console.table(...args);
    return args;
  },

  echo<T = unknown>(...args: T[]): T[] {
    console.log(...args);
    return args;
  },

  ech0<T = unknown>(arg0: T): T {
    console.log(arg0);
    return arg0;
  },

  getMyToken: () => {
    config();
    return process.env.QUESTRADE_API_TOKEN ?? '';
  },

  makeTedis: (
    options?:
      | {
          host?: string | undefined;
          port?: number | undefined;
          password?: string | undefined;
          timeout?: number | undefined;
          tls?: { key: Buffer; cert: Buffer } | undefined;
        }
      | undefined,
  ): Tedis => new Tedis(options),

  client<R>(
    config: ClientRequestConfig | string,
    axioLikeClient: ClientStatic,
  ): ClientPromise<R> {
    if (typeof config !== 'string') {
      return axioLikeClient(config);
    }
    return axioLikeClient(config);
  },

  getHttpClient(axiosLikeClient: ClientStatic = axios): ClientStatic {
    return axiosLikeClient;
  },

  writeToken(
    credentials: Credentials,
    response: ClientResponse<IRefreshCreds>,
  ): Credentials {
    return _writeToken(credentials, response);
  },

  validateToken(
    options: QuestradeAPIOptions,
  ): {
    refreshToken: string;
    credentials: Credentials;
  } {
    return _validateToken(options);
  },

  setMyToken(): unknown {
    return;
  },

  getHash(): unknown {
    return;
  },
};

// export const {
//   client: SFX_CLIENT,
//   getHttpClient: SFX_GETHTTPCLIENT,
//   writeToken: SFX_WRITETOKEN,
//   validateToken: SFX_VALIDATETOKEN,
//   setMyToken: SFX_SETMYTOKEN,
//   getMyToken: SFX_GETMYTOKEN,
//   getHash: SFX_GETHASH,
//   errorlog: SFX_ERRORLOG,
//   warnlog: SFX_WARNINGLOG,
//   infolog: SFX_INFOLOG,
//   tablelog: SFX_TABLELOG,
//   echo: SFX_ECHO,
//   ech0: SFX_ECH0,
// } = sideEffects;

// /**
//  * QuesTrade Token
//  * in (dot).env file :
//  * QUESTRADE_API_TOKEN="PQHfjX1hPA-XXXXX_XXXXX-6vpDUDRHB0"
//  * Side Effects in: import { config } from 'dotenv'
//  */
