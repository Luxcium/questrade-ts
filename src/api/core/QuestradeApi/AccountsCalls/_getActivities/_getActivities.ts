import { _axiosAccountGetApi } from '../../..';
import { endpointFormatDateTool } from '../../../../../utils';
import { IActivities } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (credentials: Credentials) => (
  startTime: string
) => async (endTime: string) => {
  const dateTime = endpointFormatDateTool(startTime, endTime);
  const endpoint = `/activities?${dateTime}`;

  return (await _axiosAccountGetApi()(credentials)<IActivities>(endpoint)())
    .activities;
};
