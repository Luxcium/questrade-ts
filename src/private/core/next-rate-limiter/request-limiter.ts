// export async function newRequestLimiter<R>(options: ApiOptions) {
//   const { httpClient, config, maxPerSec, maxPerHour } = options;

//   // cb(fn(args));
//   void httpClient, maxPerSec, maxPerHour;

//   const callQueue = new ApiCallQ_(options);
//   const call = callQueue.addToQueue<R>({ config, fn: httpClient });

//   void call;

//   return limitingRequest(
//     async (conf: ClientRequestConfig = config) => httpClient<R>(conf),
//     20,
//   );
// }
// newRequestLimiter

export const Null = null;
