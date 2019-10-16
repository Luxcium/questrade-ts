import { Credentials, Time } from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/API_Request_AXIOS';

// + _getServerTime
/** _getTime */
export const _getServerTime = (credentials: Credentials) => async (): Promise<
  Date
> => new Date((await _axiosGetApi(credentials)<Time>('/time')()).time);

/*
  import { AxiosStatic, default as axios } from 'axios';
export const axiosStatic = (_axios: AxiosStatic = axios)=>_axios
  */
