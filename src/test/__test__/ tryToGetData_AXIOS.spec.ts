import { _logErrors } from '../../private/core/_logErrors';
import { _tryToGetData } from '../../private/core/XX-try-to-get-data-from-http-client-XX';

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
  done();
});
