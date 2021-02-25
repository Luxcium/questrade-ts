import type { ClientPromise, ClientRequestConfig } from '../../../resources/side-effects/types';
import type { Credentials } from '../../../typescript';
declare function _rateLimiter<R>(configs: {
    httpClient: (conf: ClientRequestConfig) => ClientPromise<any>;
    config: ClientRequestConfig;
    possiblePerSeconds: number;
    maxPerSeconds?: number | null;
    useNewRateLimiter: boolean;
    credentials?: Credentials;
}): Promise<unknown>;
export { _rateLimiter };
//# sourceMappingURL=_rateLimiter.d.ts.map