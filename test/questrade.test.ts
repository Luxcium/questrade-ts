import { questrade } from '../src/questrade';
test('should exist at least', async (done: any) => {
  await questrade('').catch(async (error: any) => {
    await console.warn(error.message);
    done();
  });
});
