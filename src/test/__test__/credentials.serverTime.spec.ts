import { _emptyCredentials, _getQuestradeApi } from '../../private';
import { sideEffects } from '../../resources/side-effects/default-behaviour';

const { echo } = sideEffects;

test("should set getServerTime to 'ERROR'", async done => {
  const qtApi = await _getQuestradeApi(_emptyCredentials());
  const serverTime = qtApi.serverTime;
  void echo(serverTime);

  expect(serverTime).toEqual('ERROR');
  done();
});
