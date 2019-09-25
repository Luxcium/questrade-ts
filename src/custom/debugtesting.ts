// tslint:disable: ordered-imports
import { endpointFormatDate, log, _credentialsFactory } from '.';
import { _axiosApi } from '../core/api';
import { Credentials, RawApiPost } from '../core/libraries';
import { endpointFormatAccount } from './endpointFormat/endpointFormatAccount';
// !! ==================================================

const myRefreshToken = 'qd0AJcnxOGOKpXzvqzIbzKwgHy3Rm3XJ0';

export const _rawApiPost: RawApiPost = (crendentials: Credentials) => <
  T,
  P = any
>(
  endpoint: string
) => (postData: P) => _axiosApi(crendentials)<P>('POST', postData)<T>(endpoint);

export const newFunct = (crendentials: Credentials) => (verb: string) => (
  postData: any
) => (endpoint: string) => {
  return { crendentials, verb, postData, endpoint };
};

export const _getActivities = <T = any>(credentials: Credentials) => (
  startTime: string
) => async (endTime: string) => {
  const dateTime = endpointFormatDate(startTime, endTime);
  const endpoint = `/activities?${dateTime}`;
  return _axiosApi(credentials)('GET', null)<T>(
    endpointFormatAccount(credentials, endpoint)
  );
};

(async () => {
  const startTime = new Date(Date.now()).toISOString();
  const endTime = new Date(Date.now() - 20 * 24 * 60 * 1000).toISOString();
  const cred = await _credentialsFactory(myRefreshToken);
  log(await _getActivities(cred)(startTime)(endTime));
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);
