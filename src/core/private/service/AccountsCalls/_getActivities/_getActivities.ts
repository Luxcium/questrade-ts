import { endpointFormatDateTool } from '../../../../../utils';
import {
  Credentials,
  IAccountActivity,
  IActivities,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../client';

// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (credentials: Credentials) => {
  //
  return (startTime: string) => {
    //
    return async (endTime: string): Promise<IAccountActivity[]> => {
      //
      const accountGetApi = _axiosAccountGetApi(credentials);
      //
      const dateTime = endpointFormatDateTool(startTime, endTime);
      const endpoint = `/activities?${dateTime}`;
      //
      const accountGet = accountGetApi<IActivities>(endpoint);
      const activities = await accountGet();
      //
      return activities.activities;
      //
    };
  };
};
