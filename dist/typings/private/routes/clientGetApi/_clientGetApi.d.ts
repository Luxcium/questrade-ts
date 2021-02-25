import type { Credentials, ProxyFactory_ } from '../../../typescript';
import type { ApiCallQ_ } from '../../core/next-rate-limiter/queue';
/**
 * yOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=\> Promise<R>
 */
export declare const _clientGetApi: (credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ProxyFactory_ | null) => <R>(endpoint: string, handlerOptions: import("../../../resources/side-effects/typescript").ProxyHandlerOptions) => () => Promise<R>;
//# sourceMappingURL=_clientGetApi.d.ts.map