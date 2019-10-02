describe('Lets play a game', () => {
  it('is call the test game', () => {
    expect(10).toBe(13 - 3);
    expect(10).toBe(13 - 3);
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
