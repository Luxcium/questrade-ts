import {
  AxiosAdapter,
  AxiosBasicCredentials,
  AxiosProxyConfig,
  AxiosRequestConfig,
  AxiosTransformer,
  CancelToken,
  Method,
} from 'axios';

export interface CoreApiConfig<D> {
  url: string;
  method: 'GET' | 'POST';
  headers: {
    Authorization: string;
    location: string;
  };
  data: D | null;
}

export interface AuthApiConfig {
  url: string;
  method: 'GET';
  params: {
    grant_type: 'refresh_token';
    refresh_token: string;
  };
  headers?: {
    Authorization: string;
    location: string;
  };
  data?: null;
}

export interface AxiosRequestConfig2 {
  url?: string;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
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
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
}
export type { AxiosRequestConfig };
