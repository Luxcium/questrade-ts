import { AxiosStatic, default as axios } from 'axios';
import {
  Credentials,
  IAccountActivity,
  IActivities,
} from '../../../../typescript';
import { endpointFormatDateTool } from '../../../../utils';
import { _axiosAccountGetApi } from '../../../core/AxiosRequestApiFactory';

// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (_axios: AxiosStatic = axios) => {
  //
  return (credentials: Credentials) => {
    //
    return (startTime: string) => {
      //
      return async (endTime: string): Promise<IAccountActivity[]> => {
        //
        const axiosAccountGetApi = _axiosAccountGetApi(_axios);
        const accountGetApi = axiosAccountGetApi(credentials);
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
};
