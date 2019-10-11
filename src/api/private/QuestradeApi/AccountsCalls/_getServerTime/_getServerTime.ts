import { AxiosStatic, default as axios } from 'axios';
import { Credentials, Time } from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/AxiosRequestApiFactory';

// + _getServerTime
/** _getTime */
export const _getServerTime = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (): Promise<Date> =>
  new Date((await _axiosGetApi(_axios)(credentials)<Time>('/time')()).time);

/*
  import { AxiosStatic, default as axios } from 'axios';
export const axiosStatic = (_axios: AxiosStatic = axios)=>_axios
  */
