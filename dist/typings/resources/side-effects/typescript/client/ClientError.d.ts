import { ClientRequestConfig } from './ClientRequestConfig';
import { ClientResponse } from './ClientResponse';
export interface ClientError<T = any> extends Error {
    config: ClientRequestConfig;
    code?: string;
    request?: any;
    response?: ClientResponse<T>;
    isAxiosError: boolean;
    toJSON: () => object;
}
//# sourceMappingURL=ClientError.d.ts.map