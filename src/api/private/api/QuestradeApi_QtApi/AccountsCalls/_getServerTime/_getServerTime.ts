import { Credentials, ITime } from '../../../../../../typescript';
import { _axiosGetApi } from '../../../../core';

// + _getServerTime
/** _getTime */
export const _getServerTime = (credentials: Credentials) => async (): Promise<
  Date
> => new Date((await _axiosGetApi(credentials)<ITime>('/time')()).time);

/*
  import { AxiosStatic, default as axios } from 'axios';
export const axiosStatic = (_axios: AxiosStatic = axios)=>_axios
  */
