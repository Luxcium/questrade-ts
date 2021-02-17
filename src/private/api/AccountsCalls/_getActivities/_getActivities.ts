import type {
  IAccountActivity,
  IActivities,
  Logger,
} from '../../../../typescript';
import { urlEncodeDateTool } from '../../../../utils';

// + _getActivities
/** pROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise\<IAccountActivity[]\>' */
export const _getActivities = (
  accountGetApi: <R>(accountEndpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => {
  return (startTime: string) => {
    //
    return async (endTime: string): Promise<IAccountActivity[]> => {
      try {
        const dateTime = urlEncodeDateTool(startTime, endTime);
        const endpoint = `/activities?${dateTime}`;
        const accountGet = accountGetApi<IActivities>(endpoint);
        const activities = await accountGet();

        return activities.activities;
      } catch (error) {
        void errorlog(error.message);

        return [];
      }
    };
  };
};
