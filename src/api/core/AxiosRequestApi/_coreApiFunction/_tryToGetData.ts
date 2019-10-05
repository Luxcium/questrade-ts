import axios, { AxiosResponse } from 'axios';
import { _logErrors } from './';
export async function _tryToGetData<R>(
  _config: any,
  _axios: any = axios,
  _logError: any = _logErrors
): Promise<R> {
  //
  try {
    const response = (await _axios(_config)) as AxiosResponse<R>;
    if (!response.data) {
      throw _logError(new Error("Can't retrive data from call to API"));
    }
    return response.data;
  } catch (error) {
    throw _logError(error);
  }
}
