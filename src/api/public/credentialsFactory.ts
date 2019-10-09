import { AxiosStatic, default as axios } from 'axios';
import { _redeemToken } from '../private';

const redeemToken = _redeemToken(axios as AxiosStatic);

export { redeemToken };
