import { _axiosAccountApi } from '../../api/_axiosApi';
import { Credentials } from '../../libraries';
import { IActivities } from '../../types';
import { endpointFormatDateTool as _endpointFormatDateTool } from '../../utils/timeutil';

// # _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (credentials: Credentials) => (
  startTime: string
) => (endTime: string) => async () => {
  const dateTime = _endpointFormatDateTool(startTime, endTime);
  const endpoint = `/activities?${dateTime}`;

  return (await _axiosAccountApi(credentials)<IActivities>(endpoint)())
    .activities;
};
