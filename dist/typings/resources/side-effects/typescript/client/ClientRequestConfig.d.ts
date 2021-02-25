import { Cancel } from './Cancel';
import { ClientResponse } from './ClientResponse';
import { ClientTransformer } from './ClientTransformer';
export interface ClientRequestConfig {
    url?: string;
    method?: 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
    baseURL?: string;
    transformRequest?: ClientTransformer | ClientTransformer[];
    transformResponse?: ClientTransformer | ClientTransformer[];
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
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
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
    proxy?: {
        host: string;
        port: number;
        auth?: {
            username: string;
            password: string;
        };
        protocol?: string;
    } | false;
    cancelToken?: {
        promise: Promise<Cancel>;
        reason?: Cancel;
        throwIfRequested(): void;
    };
    decompress?: boolean;
}
//# sourceMappingURL=ClientRequestConfig.d.ts.map