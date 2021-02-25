import type { Credentials, ProxyFactory_ } from '../../../typescript';
import type { ApiCallQ_ } from '../../core/next-rate-limiter/queue';
/**
 * yOU PROVIDE: credentials and accountEndpoint string with R return type,
 * THEN YOU GET: ( ) =\> Promise<R>
 */
export declare const _clientAccountGetApi: (credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ProxyFactory_ | null) => <R>(accountEndpoint: string) => () => Promise<R>;
//# sourceMappingURL=_clientAccountGetApi.d.ts.map