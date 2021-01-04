export interface CancelTokenStatic {
  new (executor: (cancel: { (cancelMessage?: string): void }) => void): {
    promise: Promise<{
      cancelMessage: string;
    }>;
    reason?: {
      cancelMessage: string;
    };
    throwIfRequested(): void;
  };
  source(): CancelTokenSource;
}

export interface CancelToken {
  promise: Promise<{
    cancelMessage: string;
  }>;
  reason?: {
    cancelMessage: string;
  };
  throwIfRequested(): void;
}

export interface CancelTokenSource {
  token: {
    promise: Promise<{
      cancelMessage: string;
    }>;
    reason?: {
      cancelMessage: string;
    };
    throwIfRequested(): void;
  };
  cancel: {
    (cancelMessage?: string): void;
  };
}
export interface ClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: ClientRequestConfig;
  request?: any;
}

export interface ClientPromise<T = any> extends Promise<ClientResponse<T>> {}
export interface ClientInstance {
  (config: ClientRequestConfig): ClientPromise;
  (url: string, config?: ClientRequestConfig): ClientPromise;
  defaults: ClientRequestConfig;
  interceptors: {
    request: {
      use(
        onFulfilled?: (
          value: ClientRequestConfig,
        ) => ClientRequestConfig | Promise<ClientRequestConfig>,
        onRejected?: (error: any) => any,
      ): number;
      eject(id: number): void;
    };
    response: {
      use(
        onFulfilled?: (
          value: ClientRequestConfig,
        ) => ClientRequestConfig | Promise<ClientRequestConfig>,
        onRejected?: (error: any) => any,
      ): number;
      eject(id: number): void;
    };
  };
  getUri(config?: ClientRequestConfig): string;
  request<T = any, R = ClientResponse<T>>(
    config: ClientRequestConfig,
  ): Promise<R>;
  get<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  delete<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  head<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  options<T = any, R = ClientResponse<T>>(
    url: string,
    config?: ClientRequestConfig,
  ): Promise<R>;
  post<T = any, R = ClientResponse<T>>(
    url: string,
    data?: any,
    config?: ClientRequestConfig,
  ): Promise<R>;
  put<T = any, R = ClientResponse<T>>(
    url: string,
    data?: any,
    config?: ClientRequestConfig,
  ): Promise<R>;
  patch<T = any, R = ClientResponse<T>>(
    url: string,
    data?: any,
    config?: ClientRequestConfig,
  ): Promise<R>;
}
export interface ClientStatic extends ClientInstance {
  create(config?: ClientRequestConfig): ClientInstance;
  Cancel: {
    new (cancelMessage?: string): {
      cancelMessage: string;
    };
  };
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
  isAxiosError(payload: any): payload is ClientError;
}

export interface ClientError<T = any> extends Error {
  config: ClientRequestConfig;
  code?: string;
  request?: any;
  response?: ClientResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}
export interface ClientRequestConfig {
  url?: string;
  method?:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'purge'
    | 'PURGE'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK';
  baseURL?: string;
  transformRequest?: (
    data: any,
    headers?: any,
  ) => any | ((data: any, headers?: any) => any)[];
  transformResponse?: (
    data: any,
    headers?: any,
  ) => any | ((data: any, headers?: any) => any)[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: (config: ClientRequestConfig) => Promise<ClientResponse<any>>;
  auth?: {
    username: string;
    password: string;
  };
  responseType?:
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream';
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?:
    | {
        host: string;
        port: number;
        auth?: {
          username: string;
          password: string;
        };
        protocol?: string;
      }
    | false;
  cancelToken?: {
    promise: Promise<{
      cancelMessage: string;
    }>;
    reason?: {
      cancelMessage: string;
    };
    throwIfRequested(): void;
  };
  decompress?: boolean;
}
export const sideEffects = {
  client<R>(
    config: ClientRequestConfig | string,
    axioClient: ClientStatic,
  ): ClientPromise<R> {
    if (typeof config !== 'string') {
      return axioClient(config);
    }
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
