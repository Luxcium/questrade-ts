import type { ClientRequestConfig } from '../../../resources/side-effects/types';
import type { Credentials } from '../../../typescript';
/**
 * partial application of Core api config builder generating an
 * object of strings value in the format of CoreApiConfig<D> to
 * be sent to client as main parameter.
 */
declare function _coreApiConfig<D>(credentials: Credentials): (VERB: 'GET' | 'POST') => (endpoint: string) => (postData: D | null) => ClientRequestConfig;
export { _coreApiConfig };
//# sourceMappingURL=_coreApiConfig.d.ts.map