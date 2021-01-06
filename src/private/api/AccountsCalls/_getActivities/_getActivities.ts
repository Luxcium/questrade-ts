import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  ClientProxyHandler,
  Credentials,
  IAccountActivity,
  IActivities,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => {
  return (startTime: string) => {
    //
    return async (endTime: string): Promise<IAccountActivity[]> => {
      try {
        const accountGetApi = _axiosAccountGetApi(credentials, proxy);

        const dateTime = endpointFormatDateTool(startTime, endTime);
        const endpoint = `/activities?${dateTime}`;

        const accountGet = accountGetApi<IActivities>(endpoint);
        const activities = await accountGet();

        return activities.activities;
      } catch (error) {
        void errorlog(error);
        return [];
      }
    };
  };
};
