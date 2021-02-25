import type { ProxyHandlerOptions } from '../../../resources/side-effects/types';
import type { Credentials, Logger, ProxyFactory_ } from '../../../typescript';
import type { ApiCallQ_ } from '../next-rate-limiter/queue';
declare function _coreApiFunction(credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ProxyFactory_ | null, errorlog?: Logger): (VERB: 'GET' | 'POST') => <D>(postData: D | null) => <R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>;
export { _coreApiFunction };
//# sourceMappingURL=_coreApiFunction.d.ts.map