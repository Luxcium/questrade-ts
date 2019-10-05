import { AxiosStatic, default as axios } from 'axios';
import { _redeemToken } from './core';

const redeemToken = _redeemToken(axios as AxiosStatic);

export { _redeemToken, redeemToken };
