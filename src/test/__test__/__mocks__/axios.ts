import { readFileSync } from 'fs';
import { resolve } from 'path';

import { sideEffects } from '../../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientStatic,
} from '../../../resources/side-effects/types';

const { errorlog } = sideEffects;
const _Client = jest.fn();
const introspect = { onOff: false };
const path = (s: string) => resolve(`${__dirname}/sample/${s}.json`);

_Client.mockName('Client');
_Client.mockImplementation((config?: ClientRequestConfig) => {
  const url = !!config && !!config.url ? config.url : '';
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
    if (!previous && url.includes(`/${dir}`)) {
      if (dir === 'ERROR') {
        const errMessage: string = 'Testing Errors';

        void errorlog(errMessage);
        throw new Error(errMessage);
      }

      return JSON.parse(readFileSync(path(dir), 'utf8'));
    }

    return previous;
  }, '');
  const resp = !!data ? data : null;

  return { data: resp, introspect };
});
const Client = (_Client as unknown) as ClientStatic;

export { Client };
