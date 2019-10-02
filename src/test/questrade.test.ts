import * as api from '../api';
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
*/
