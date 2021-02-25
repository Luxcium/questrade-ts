import type { ApiOptions, Credentials, ProxyFactory_ } from '../../typescript';
import type { ApiCallQ_ } from '../core/next-rate-limiter/queue';
/** provide: a token string THEN GET: a 'Promise<Credentials>' */
declare function _credentialsFactory(apiOptions: ApiOptions, apiCallQ: ApiCallQ_, proxyFactory?: (() => ProxyFactory_) | null): Promise<Credentials>;
export { _credentialsFactory };
//# sourceMappingURL=_credentialsFactory.d.ts.map