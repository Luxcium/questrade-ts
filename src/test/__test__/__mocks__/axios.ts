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
  ].reduce((previous, dir) => {
    if (!previous) {
      if (url.indexOf(`/${dir}`) !== -1) {
        return JSON.parse(readFileSync(path(dir), 'utf8'));
      }
    }
    return previous;
  }, '');
  return { data, introspect };
});
const axios = (_axios as unknown) as AxiosStatic;

module.exports = axios;
