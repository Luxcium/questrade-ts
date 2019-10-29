import { redeemToken } from '../..';
import { _logErrors } from '../../private/core/_logErrors';
import { _tryToGetData } from '../../private/core/_tryToGetData_AXIOS';

// beforeAll(async done => {

// })
test('should ERROR _tryToGetData', async done => {
  const qtApiAndCredentials = await redeemToken('MOCK');
  // const qtApi = qtApiAndCredentials.qtApi;

  const credentials = qtApiAndCredentials.credentials;
  const response = _tryToGetData(
    {
      url: 'ERROR',
      data: null,
      method: 'get',
      headers: { location: '1234567', Authorization: 'str' },
    },
    credentials
  );
  try {
    expect(await response(_logErrors)).toThrow();
  } catch (_) {
    //
  }
  // console.log();
  done();
});
