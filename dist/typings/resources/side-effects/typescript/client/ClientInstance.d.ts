import { ClientInterceptorManager } from './ClientInterceptorManager';
import { ClientPromise } from './ClientPromise';
import { ClientRequestConfig } from './ClientRequestConfig';
import { ClientResponse } from './ClientResponse';
export interface ClientInstance {
    (config: ClientRequestConfig): ClientPromise;
    (url: string, config?: ClientRequestConfig): ClientPromise;
    defaults: ClientRequestConfig;
    interceptors: {
        request: ClientInterceptorManager<ClientRequestConfig>;
        response: ClientInterceptorManager<ClientResponse>;
    };
    getUri(config?: ClientRequestConfig): string;
    request<T = any, R = ClientResponse<T>>(config: ClientRequestConfig): Promise<R>;
    get<T = any, R = ClientResponse<T>>(url: string, config?: ClientRequestConfig): Promise<R>;
    delete<T = any, R = ClientResponse<T>>(url: string, config?: ClientRequestConfig): Promise<R>;
    head<T = any, R = ClientResponse<T>>(url: string, config?: ClientRequestConfig): Promise<R>;
    options<T = any, R = ClientResponse<T>>(url: string, config?: ClientRequestConfig): Promise<R>;
    post<T = any, R = ClientResponse<T>>(url: string, data?: any, config?: ClientRequestConfig): Promise<R>;
    put<T = any, R = ClientResponse<T>>(url: string, data?: any, config?: ClientRequestConfig): Promise<R>;
    patch<T = any, R = ClientResponse<T>>(url: string, data?: any, config?: ClientRequestConfig): Promise<R>;
}
//# sourceMappingURL=ClientInstance.d.ts.map