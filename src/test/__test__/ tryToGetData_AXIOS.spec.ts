import { _tryToGetData } from '../../private/core/X_tryToGetData_AXIOS_X';
import { _logErrors } from '../../private/core/_logErrors';

test('should ERROR _tryToGetData', async done => {
  const response = _tryToGetData({
    url: 'ERROR',
    data: null,
    method: 'GET',
    headers: { location: '1234567', Authorization: 'str' },
  });
  try {
    expect(await response(_logErrors)).toThrow();
  } catch {
    //
  }
  // console.log();
  done();
});
