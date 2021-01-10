import axios from 'axios';
import { config } from 'dotenv';
import { Tedis } from 'tedis';

import { id0 } from '../../utils';
import { ClientPromise, ClientRequestConfig, ClientStatic } from './types';

// export const makeTedis =;
export const sideEffects = {
  makeTedis: () => id0(new Tedis()),
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
  writeToken(): unknown {
    return;
  },
  validateToken(): unknown {
    return;
  },
  setMyToken(): unknown {
    return;
  },
  /**
   * QuesTrade Token
   * in (dot).env file :
   * QUESTRADE_API_TOKEN="PQHfjX1hPA-XXXXX_XXXXX-6vpDUDRHB0"
   * Side Effects in: import { config } from 'dotenv'
   */
  getMyToken: () => {
    config();
    return process.env.QUESTRADE_API_TOKEN ?? '';
  },
  getHash(): unknown {
    return;
  },
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
};
export const {
  client: SFX_CLIENT,
  writeToken: SFX_WRITETOKEN,
  validateToken: SFX_VALIDATETOKEN,
  setMyToken: SFX_SETMYTOKEN,
  getMyToken: SFX_GETMYTOKEN,
  getHash: SFX_GETHASH,
  errorlog: SFX_ERRORLOG,
  warnlog: SFX_WARNINGLOG,
  infolog: SFX_INFOLOG,
  tablelog: SFX_TABLELOG,
  echo: SFX_ECHO,
} = sideEffects;

/*
+ _writeToken, _validateToken, setMyToken, getMyToken
rm /home/luxcium/dev/questrade-ts/build/src/test
- import { access, constants, readFileSync, writeFileSync } from 'fs';
- import path from 'path';
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js 5:11-24
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_validateToken.js 6:37-52

- import { writeFileSync } from 'fs';
ERROR in ./build/src/private/auth/axiosCredentials_oAUTH/_writeToken.js 4:11-24

- when using crypto
ERROR in ./build/src/utils/create-url-and-data-hashes.js 4:15-32
ERROR in ./build/src/utils/getHash.js 5:39-56

- when using FsImplementationSync, Made, Mode, OptionsSync, sync
ERROR in ./build/src/utils/mkdirp.js 8:35-48
ERROR in ./build/src/utils/mkdirp.js 9:37-52

- in /home/luxcium/dev/questrade-ts/src/get-token.ts
ERROR in ./node_modules/dotenv/lib/main.js 24:11-24
ERROR in ./node_modules/dotenv/lib/main.js 25:13-28
 */
