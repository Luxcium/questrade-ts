// import type {
//   ClientRequestConfig,
//   ClientResponse,
//   ClientStatic,
// } from '../../../resources/side-effects/types';
// import type { Credentials } from '../../../typescript';
// import { limitingRequest } from '../request-per-second-limit';

// async function _rateLimiter<R>(
//   httpClient: ClientStatic,
//   _config: ClientRequestConfig,
//   credentials?: Credentials,
// ) {
//   // INFO: //-! RATE LIMITER Block Start ***************************************

//   const possiblePerSeconds =
//     credentials?.remainingRequests?.possiblePerSeconds ?? 21;

//   return possiblePerSeconds <= 20 && possiblePerSeconds > 0
//     ? limitingRequest(
//         async (): Promise<ClientResponse<R>> => httpClient(_config),
//         possiblePerSeconds,
//       )
//     : httpClient(_config);
// }

// export { _rateLimiter };

export const _rateLimiter = null;
