import { ClientRequestConfig } from './ClientRequestConfig';
export interface ClientResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: ClientRequestConfig;
    request?: any;
}
//# sourceMappingURL=ClientResponse.d.ts.map