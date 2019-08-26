import { axios, AxiosResponse, IHeaders } from '.';
import { Methode } from '../core/types/Methode';

export async function apiClient<T>(
  endpoint: string,
  _apiUrl: any,
  _accessToken: any
): Promise<T> {
  const method: Methode = 'GET';

  return (async function _api(
    options?: any,
    additionalHeaders?: IHeaders
  ): Promise<T> {
    let data: T;
    try {
      let response: AxiosResponse<T>;
      response = await axios({
        url: _apiUrl + endpoint,
        params:
          typeof options !== 'undefined' && typeof options === 'object'
            ? options
            : {},
        method,
        headers: {
          Authorization: `Bearer ${_accessToken}`,
          ...additionalHeaders,
        },
      });
      if (!response.data) {
        throw new Error();
      }
      data = response.data;
    } catch (apiError) {
      try {
        console.error(
          '\nAPI error in call to api:\n',
          `\n${apiError.message}`,
          `\nError code: ${apiError.response.data.code}`,
          `\n${apiError.response.data.message}`
        );
      } catch (dataError) {
        console.error(
          '\nAPI error in the response from the api:',
          `\n${dataError.message}`
        );
      }
      throw apiError;
    }
    return data;
  })();
}
