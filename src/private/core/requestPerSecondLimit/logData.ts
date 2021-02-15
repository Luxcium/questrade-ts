import { ClientResponse } from '../../../resources/side-effects/types';

export const logData = <T>(response: ClientResponse<T>) => {
  const { config, data, headers, status, statusText } = response;

  // cONSOLE: using console info is a sideEffect and will be flagged

  console.info('status ==============================');
  console.info(status, statusText);
  console.info('');
  console.info('data ==============================');
  console.info(data);
  console.info('');
  console.info('config ==============================');
  console.info(config);
  console.info('');
  console.info('Account calls 30 per seconds 30000 per hour ');
  // 30(per sec) *X* 60 (sec per minute) = 108'000 slots per hours (can use 27%)
  // 500 per minutes 8.3 per seconds 25 each 3 seconds
  console.info('Market Data calls 20 per seconds 15000 per hour ');
  // 20(per sec) *X* 60 (sec per minute) = 72'000  slots per hours (can use 20%)
  // 250 per minutes 4.16 per sec 25 per 6 seconds
  console.info('headers ==============================');
  console.info(headers);
};
