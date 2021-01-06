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
