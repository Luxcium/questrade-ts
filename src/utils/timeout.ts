/* eslint-disable radar/no-identical-functions */
import { promisify } from 'util';

async function timeout_<T>(fn: (val: T) => any, value: T, delay: number) {
  return promisify(setTimeout)(delay, value).then(fn);
}

export const timeoutPromise = {
  delay(delay: number) {
    return {
      fn<T>(fnx: (val: T) => any) {
        return {
          value(value: T) {
            return timeout_(fnx, value, delay);
          },
        };
      },
      value<T>(value: T) {
        return {
          fn(fnx: (val: T) => any) {
            return timeout_(fnx, value, delay);
          },
        };
      },
    };
  },
  fn<T>(fnx: (val: T) => any) {
    return {
      delay(delay: number) {
        return {
          value(value: T) {
            return timeout_(fnx, value, delay);
          },
        };
      },
      value(value: T) {
        return {
          delay(delay: number) {
            return timeout_(fnx, value, delay);
          },
        };
      },
    };
  },
  value<T>(value: T) {
    return {
      delay(delay: number) {
        return {
          fn(fnx: (val: T) => any) {
            return timeout_(fnx, value, delay);
          },
        };
      },
      fn(fnx: (val: T) => any) {
        return {
          delay(delay: number) {
            return timeout_(fnx, value, delay);
          },
        };
      },
    };
  },
};
