// tslint:disable: ordered-imports
import { _credentialsFactory, _getActivities } from '.';
import { day } from '../core/utils/timeutil/';
export const log = console.log;
const myRefreshToken = 'qd0AJcnxOGOKpXzvqzIbzKwgHy3Rm3XJ0';

(async () => {
  const startTime = new Date(Date.now() - day(30)).toISOString();
  const endTime = new Date(Date.now()).toISOString();

  const cred = await _credentialsFactory(myRefreshToken);

  const getActivities = _getActivities(cred);
  const activitiesUntil = getActivities(startTime);
  const activities = activitiesUntil(endTime);

  log(await activities());
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);
