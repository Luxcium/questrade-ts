import * as api from '../api';
import * as apiCore from '../api/core';
import * as _axiosApi from '../api/core/_axiosApi';
import * as _credentialsFactory from '../api/core/_credentialsFactory';
import * as _getQuestradeApi from '../api/core/_getQuestradeApi';
import * as _marketsQuotesOptions from '../api/core/_getQuestradeApi/_marketsQuotesOptions';
import * as apiUtils from '../api/utils';
const log = apiUtils.log;
describe('Lets play a game', () => {
  it('should convert days to miliseconds', () => {
    expect(api.day(100)).toBe(100 * 24 * 60 * 60 * 1000);
  });
  it('should log and return void', () => {
    expect(api.log(api.id0(() => 100))).toBe(undefined);
  });
  it('should vvoid and return undefined', () => {
    expect(api.void0(api.id0(() => 100))).toBe(undefined);
  });
});

describe('Name of the group', () => {
  it('should ', (done: any) => {
    log(apiCore._defaultCredentials);
    apiUtils.void0(api);
    apiUtils.void0(apiCore);
    apiUtils.void0(apiUtils);
    apiUtils.void0(_axiosApi);
    apiUtils.void0(_credentialsFactory);
    apiUtils.void0(_getQuestradeApi);
    apiUtils.void0(_marketsQuotesOptions);
    apiUtils.void0();
    done();
  });
});

/*
afterAll(fn, timeout)
afterEach(fn, timeout)
beforeAll(fn, timeout)
beforeEach(fn, timeout)
describe(name, fn)
describe.each(table)(name, fn, timeout)
describe.only(name, fn)
describe.only.each(table)(name, fn)
describe.skip(name, fn)
describe.skip.each(table)(name, fn)
test(name, fn, timeout)
test.each(table)(name, fn, timeout)
test.only(name, fn, timeout)
test.only.each(table)(name, fn)
test.skip(name, fn)
test.skip.each(table)(name, fn)
test.todo(name)

import    * as jest  from 'jest';
import { tokenConnection } from '../api';
test('should exist at least', async (done: any) => {
  const { qt } = await tokenConnection('mock');
  await qt.getServerTime();
  await questrade('').catch(async (error: any) => {
  await console.warn(error.message);
  done();
});

piUrl: '',
      apiVersion: 'v1',
      authUrl: '',
      expiresAt: undefined,
      tokenExpiration: undefined,
      expiresIn: 0,
      keyDir: './keys',
      keyFile: '',
      practice: false,
      refreshToken: '',
      seedToken: '',
      serverTime: undefined,
      tokenType: '',
      toValue: [Function: toValue],
      toString: [Function: toString] }

      -------------------------------------------------
File
-------------------------------------------------
All files
api
index.ts

testExamples.ts


index.ts


index.ts

_axiosAccountGetApi.ts
_axiosApi.ts
_axiosApiPost.ts
_axiosGetApi.ts
_endpointFormatAccount.ts


index.ts


index.ts


index.ts


index.ts

id0.ts
mkdirp.ts
timeutil.ts


*/
