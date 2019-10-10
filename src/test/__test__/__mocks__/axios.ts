import { AxiosRequestConfig, AxiosStatic } from 'axios';
import { void0 } from '../../../api/utils';
const _axios = jest.fn();
_axios.mockName('axios');
_axios.mockImplementation((config?: AxiosRequestConfig) => {
  const some = {
    data: {
      accessToken: 'AMkwi27aqHJt0qiaAGsN0z15c5Kb19PB0',
      accountNumber: '51648972',
      apiServer: 'https://api02.iq.questrade.com/',
      apiUrl: 'https://api02.iq.questrade.com/v1',
      apiVersion: 'v1',
      authUrl: 'https://login.questrade.com',
      expiresAt: '6:41:17 AM',
      tokenExpiration: '2019-10-08T06:41:17.781Z',
      expiresIn: 1800,
      keyDir: './keys',
      keyFile: './keys/EXUPy9fGLADVQMzR9QvSPixTLPdMJ5Jv0',
      practice: false,
      refreshToken: 'kFvmJEGTJH3Vb4g7aeHDNBdOh3kA-JWm0',
      seedToken: 'EXUPy9fGLADVQMzR9QvSPixTLPdMJ5Jv0',
      serverTime: '2019-10-08T06:11:17.781Z',
      tokenType: 'Bearer',
      expiresAtRaw: 1570531277781,
      serverTimeRaw: 1570529477781,
    },
  };
  void0(config);
  return some;
});
// jest.genMockFromModule('axios');
// console.log('!!! MOCK AXIOS MOCK !!!');
// let axios =  jest.fn() ;// jest.genMockFromModule('axios');
// axios = jest.fn; //  console.log('!!! MOCK  GET AXIOS GET  MOCK !!!');
const axios = (_axios as unknown) as AxiosStatic;
// export { _axios };
module.exports = axios;
