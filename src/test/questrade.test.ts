// import    * as jest  from 'jest';
import { tokenConnection } from '../api';
test('should exist at least', async (done: any) => {
  const { qt } = await tokenConnection('IskeVOywsgf1xx3305wA64BGKwyVibRQ0');
  await qt.getServerTime();
  // await questrade('').catch(async (error: any) => {
  // await console.warn(error.message);
  done();
});
