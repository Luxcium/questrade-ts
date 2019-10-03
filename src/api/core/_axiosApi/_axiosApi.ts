import { AxiosRequestConfig, AxiosResponse, default as axios } from 'axios';
import { default as httpStatus } from 'http-status-codes';
import { Credentials } from '../../typescript';

// % _axiosApi !!!
/**
 * PROVIDE: credentials, VERB string, postData with D data type (or null)
 * and endpoint string with R return type, THEN GET: a Promise<R>
 */

const _axios = axios;

export const _axiosApi = (credentials: Credentials) => (
  VERB: string = 'GET'
) => <D = any>(postData: D | null = null) => async <R>(
  endpoint: string
): Promise<R> => {
  let data: R;
  try {
    let response: AxiosResponse<R>;

    const config: AxiosRequestConfig = {
      url: credentials.apiUrl + endpoint,
      method: VERB.toLowerCase() as 'get' | 'post',
      headers: {
        Authorization: `Bearer ${credentials.accessToken}`,
        location: credentials.accountNumber,
      },
      data: postData, // || '',
    };

    try {
      response = await _axios(config);
      // console.log(response);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }

    if (!response.data) {
      console.error('response data null or undefined');
      throw new Error();
    }
    data = response.data;
  } catch (apiError) {
    throw _apiGetErrorLogin(apiError);
  }
  return data;
};

// % _apiGetErrorLogin
/** PROVIDE: apiError THEN GET: apiError back WILL: console.error the problems */
const _apiGetErrorLogin = (apiError: Error /* , data?: any */) => {
  // try {
  console.error(
    '\nAPI error in call to api:\n',
    `\n${apiError.message}`
    // `\nError code: ${apiError.response.}`,
    // `\n${apiError.response.data.message}`
  );
  // } catch (dataError) {
  console.error(
    '\nAPI error in the response from the api:',
    `\n${httpStatus
      .getStatusText(
        Number.parseInt((apiError.message as string).slice(-3), 10)
      )
      .toUpperCase()}`
  );
  // }
  return apiError;
};
