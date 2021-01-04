import { AxiosRequestConfig, AxiosStatic } from 'axios';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const _axios = jest.fn();
const introspect = { onOff: false };
const path = (s: string) => resolve(`${__dirname}/sample/${s}.json`);

_axios.mockName('axios');
_axios.mockImplementation((config?: AxiosRequestConfig) => {
  const url: string = !!config && !!config.url ? config.url : '';
  const data = [
    'balances',
    'token',
    'candles',
    'activities',
    'orders',
    'positions',
    'executions',
    'options',
    'quotes',
    'markets',
    'search',
    'accounts',
    'symbols',
    'time',
    'ERROR',
  ].reduce((previous, dir) => {
    if (!previous) {
      if (url.includes(`/${dir}`)) {
        if (dir === 'ERROR') {
          const errMessage: string = 'Testing Errors';
          console.warn(errMessage); // CONSOLE: List the side effects

          throw new Error(errMessage);
        }
        return JSON.parse(readFileSync(path(dir), 'utf8'));
      }
    }
    return previous;
  }, '');
  const resp = !!data ? data : null;
  return { data: resp, introspect };
});
const axios = (_axios as unknown) as AxiosStatic;

module.exports = axios;
