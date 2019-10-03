// import { _axiosGetApi, _endpointFormatAccount } from '..';
// import { Credentials } from '../../typescript';

// // # _axiosAccountApi
// /** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
// export const _axiosAccountGetApi = (credentials: Credentials) => <R>(
//   accountEndpoint: string
// ) => async () =>
//   _axiosGetApi(credentials)<R>(
//     _endpointFormatAccount(credentials)(accountEndpoint)
//   )();
import { _axiosAccountGetApi } from '..';
import { Credentials } from '../../../typescript';
it('should ', () => {
  const mock = jest.fn<Credentials, any[]>();
  _axiosAccountGetApi(mock());
});
