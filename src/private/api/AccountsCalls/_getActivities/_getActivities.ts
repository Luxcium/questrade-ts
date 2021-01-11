import {
  ClientProxyHandler,
  Credentials,
  IAccountActivity,
  IActivities,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _clientAccountGetApi } from '../../../routes/clientAccountGetApi/_clientAccountGetApi';

// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => {
  return (startTime: string) => {
    //
    return async (endTime: string): Promise<IAccountActivity[]> => {
      try {
        const accountGetApi = _clientAccountGetApi(credentials, proxy);

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
