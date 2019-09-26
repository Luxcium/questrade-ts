// tslint:disable: ordered-imports
import {
  endpointFormatDate,
  log,
  _axiosAccountApi,
  _credentialsFactory,
} from '.';
import { Credentials } from '../core/libraries';
// !! ==================================================

const myRefreshToken = 'qd0AJcnxOGOKpXzvqzIbzKwgHy3Rm3XJ0';

export const _getActivities = (credentials: Credentials) => (
  startTime: string
) => (endTime: string) => {
  const dateTime = endpointFormatDate(startTime, endTime);
  const endpoint = `/activities?${dateTime}`;

  return _axiosAccountApi(credentials)(endpoint);
};

(async () => {
  const startTime = new Date(
    Date.now() - 10 * 24 * 60 * 60 * 1000
  ).toISOString();
  const endTime = new Date(Date.now()).toISOString();

  const cred = await _credentialsFactory(myRefreshToken);

  const getActivities = _getActivities(cred);
  const activitiesUntil = getActivities(startTime);
  const activities = activitiesUntil(endTime);

  log(await activities());
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);
