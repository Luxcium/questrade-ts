import { AxiosStatic, default as axios } from 'axios';
import { _getQuestradeApi } from '../private';

export const getQuestradeApi = _getQuestradeApi(axios as AxiosStatic);
