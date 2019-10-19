import { _emptyCredentials, _getQuestradeApi } from '../../private';

test("should set getServerTime to 'ERROR'", async done => {
  const qtApi = await _getQuestradeApi(_emptyCredentials());
  const serverTime = qtApi.serverTime;
  console.log(serverTime);
  expect(serverTime).toEqual('ERROR');
  done();
});
