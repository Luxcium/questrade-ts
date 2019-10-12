import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { CoreApiConfig } from '../../../../../typescript';
import { void0 } from '../../../../utils';
import { _logErrors } from './_logErrors';

const introspect = true;

export async function _tryToGetData<R, D>(
  _config: CoreApiConfig<D>,
  _axios: AxiosStatic = axios,
  _logError: (apiError: Error, message?: string) => Error = _logErrors
): Promise<R> {
  //
  try {
    void0(_axios); // _tryToGetData
    const response = (await axios(_config)) as AxiosResponse<R>;
    if (!response.data) {
      throw _logError(new Error("Can't retrive data from call to API"));
    }
    if (introspect) {
      console.log('\n\nOBJECT:\n');
      console.log(response.data);
      console.log('\n\nJSON:\n');
      console.log(JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw _logError(error);
  }
}
