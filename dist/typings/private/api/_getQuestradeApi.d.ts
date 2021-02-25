import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import type { Credentials, Logger, ProxyFactory_, QuestradeApi } from '../../typescript';
import type { ApiCallQ_ } from '../core/next-rate-limiter/queue';
export declare function questradeApiFactory(credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ((cred: Credentials) => ProxyFactory_) | null, errorlog?: Logger): Promise<QuestradeApi & IQuestradeAPIv2_0>;
//# sourceMappingURL=_getQuestradeApi.d.ts.map