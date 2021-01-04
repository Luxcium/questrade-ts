import { AxiosResponse } from 'axios';

export const logData = <T>(response: AxiosResponse<T>) => {
  const { config, data, headers, status, statusText } = response;

  console.log('status =============================='); // CONSOLE: List the side effects
  console.log(status, statusText); // CONSOLE: List the side effects
  console.log(''); // CONSOLE: List the side effects
  console.log('data =============================='); // CONSOLE: List the side effects
  console.log(data); // CONSOLE: List the side effects
  console.log(''); // CONSOLE: List the side effects
  console.log('config =============================='); // CONSOLE: List the side effects
  console.log(config); // CONSOLE: List the side effects
  console.log(''); // CONSOLE: List the side effects
  console.log('Account calls 30 per seconds 30000 per hour '); // CONSOLE: List the side effects
  // 30(per sec) *X* 60 (sec per minute) = 108'000 slots per hours (can use 27%)
  // 500 per minutes 8.3 per seconds 25 each 3 seconds
  console.log('Market Data calls 20 per seconds 15000 per hour '); // CONSOLE: List the side effects
  // 20(per sec) *X* 60 (sec per minute) = 72'000  slots per hours (can use 20%)
  // 250 per minutes 4.16 per sec 25 per 6 seconds
  console.log('headers =============================='); // CONSOLE: List the side effects
  console.log(headers); // CONSOLE: List the side effects
};
