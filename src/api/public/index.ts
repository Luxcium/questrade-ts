import { AxiosStatic, default as axios } from 'axios';
import { _redeemToken } from '../private';

const redeemToken = _redeemToken(axios as AxiosStatic);

export { _redeemToken, redeemToken };

// axios or something
// creds or something
// GET or POST or something
// endpoints or something (getAccount or something)
// postData or not
// apiFullyConstructed endPoint
