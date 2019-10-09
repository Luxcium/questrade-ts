import axios, { AxiosResponse } from 'axios';
import { void0 } from '../../../../utils';
import { _logErrors } from './_logErrors';
export async function _tryToGetData<R>(
  _config: any,
  _axios: any = axios,
  _logError: any = _logErrors
): Promise<R> {
  //
  try {
    void0(_axios); // _tryToGetData
    const response = (await axios(_config)) as AxiosResponse<R>;
    if (!response.data) {
      throw _logError(new Error("Can't retrive data from call to API"));
    }
    return response.data;
  } catch (error) {
    throw _logError(error);
  }
}
