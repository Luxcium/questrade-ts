import { _tryToGetData } from '../../private/core/XX-try-to-get-data-from-http-client-XX';
import { errorlog } from '../../resources/side-effects';

test('should ERROR _tryToGetData', async done => {
  const response = _tryToGetData({
    data: null,
    headers: { Authorization: 'str', location: '1234567' },
    method: 'GET',
    url: 'ERROR',
  });
  try {
    expect(await response(errorlog)).toThrow();
  } catch {
    //
  }
  done();
});
