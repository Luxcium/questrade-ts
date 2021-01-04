import { AxiosRequestConfig, AxiosStatic } from 'axios';

import { AxiosProxyHandler } from './types';

export const sideEffects = {
  client(
    config: AxiosRequestConfig | string,
    axioClient: AxiosStatic,
  ): AxiosProxyHandler | undefined {
    return axioClient(config);
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
  getMyToken(): unknown {
    return;
  },
  getHash(): unknown {
    return;
  },
  errorlog<T>(...args: T[]): T[] {
    console.error(...args);
    return args;
  },
  warninglog<T>(...args: T[]): T[] {
    console.warn(...args);
    return args;
  },
  infolog<T>(...args: T[]): T[] {
    console.info(...args);
    return args;
  },
  echo<T>(...args: T[]): T[] {
    console.log(...args);
    return args;
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
  warninglog: SFX_WARNINGLOG,
  infolog: SFX_INFOLOG,
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
