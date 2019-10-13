import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { introspect } from '../../../..';
import { CoreApiConfig } from '../../../../../typescript';
import { void0 } from '../../../../utils';
import { _logErrors } from './_logErrors';

export async function _tryToGetData<R, D>(
  _axios: AxiosStatic = axios,
  _config: CoreApiConfig<D>,
  _logError: (apiError: Error, message?: string) => Error = _logErrors
): Promise<R> {
  //
  try {
    void0(_axios); // _tryToGetData
    const response = (await axios(_config)) as AxiosResponse<R> & {
      introspect: { onOff: boolean };
    };
    if (!response || !response.data) {
      throw _logError(new Error("Can't retrive data from call to API"));
    }
    if (!!response.introspect.onOff || introspect.onOff) {
      // _tryToGetData
      console.log('\n\n_coreApiFunction_tryToGetData:\n');

      console.log('\naxiosCONFIG:\n');
      console.log(_config);
      console.log('\nOBJECT:\n');
      // console.log(response.data);
      console.log('\n\nJSON:\n');
      // console.log(JSON.stringify(response.data));
      console.log('\n--_coreApiFunction_tryToGetData--\n\n');
    }
    return response.data;
  } catch (error) {
    throw _logError(error);
  }
}
