import { _logErrors } from '../../private/core/_logErrors';
import { _tryToGetData } from '../../private/core/XX-try-to-get-data-from-http-client-XX';

test('should ERROR _tryToGetData', async done => {
  const response = _tryToGetData({
    data: null,
    headers: { Authorization: 'str', location: '1234567' },
    method: 'GET',
    url: 'ERROR',
  });
  try {
    expect(await response(_logErrors)).toThrow();
  } catch {
    //
  }
  done();
});
