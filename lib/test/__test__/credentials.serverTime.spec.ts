import { _getQuestradeApi } from '../../private/api/_getQuestradeApi';
import { sideEffects } from '../../resources/side-effects';
import { _emptyCredentials } from '../../resources/side-effects/auth/_emptyCredentials';

const { echo } = sideEffects;

test("should set getServerTime to 'ERROR'", async done => {
  const qtApi = await _getQuestradeApi(_emptyCredentials());
  const { serverTime } = qtApi;

  echo(serverTime);

  expect(serverTime).toEqual('ERROR');
  done();
});
