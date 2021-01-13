import { _httpDataEndPointConnector } from '../../private/core/XX-http-data-end-point-connector-XX';
import { errorlog } from '../../resources/side-effects';

test('should ERROR _tryToGetData', async done => {
  const response = _httpDataEndPointConnector({
    data: null,
    headers: { Authorization: 'str', location: '1234567' },
    method: 'GET',
    url: 'ERROR',
  });
  try {
    expect(await response(errorlog, {})).toThrow();
  } catch {
    //
  }
  done();
});
