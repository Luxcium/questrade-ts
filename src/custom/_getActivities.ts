import { _axiosAccountApi, _endpointFormatDate } from '.';
import { Credentials } from '../core/libraries';

export const _getActivities = (credentials: Credentials) => (
  startTime: string
) => (endTime: string) => {
  const dateTime = _endpointFormatDate(startTime, endTime);
  const endpoint = `/activities?${dateTime}`;

  return _axiosAccountApi(credentials)(endpoint);
};
