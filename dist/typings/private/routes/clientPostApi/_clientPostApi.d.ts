import type { Credentials, ProxyFactory_ } from '../../../typescript';
import type { ApiCallQ_ } from '../../core/next-rate-limiter/queue';
/**
 * yOU PROVIDE: credentials, postData with D data type
 * and endpoint string with R return type,
 * THEN YOU GET: ( ) =\> Promise<R>
 */
export declare const _clientPostApi: (credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ProxyFactory_ | null) => <D>(postData: D | null) => <R>(endpoint: string, handlerOptions: import("../../../resources/side-effects/typescript").ProxyHandlerOptions) => () => Promise<R>;
//# sourceMappingURL=_clientPostApi.d.ts.map