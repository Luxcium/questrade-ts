import { AxiosResponse, default as axios } from 'axios';
import { default as httpStatus } from 'http-status-codes';
import { Credentials } from '../core/libraries';
// % _axiosApi !!!
/** PROVIDE: credentials, VERB string, postData with D data type (or null) and endpoint string with R return type, THEN GET: a Promise<R> */
const _axiosApi = (credentials: Credentials) => (VERB: string = 'GET') => <
  D = any
>(
  postData: D | null = null
) => async <R = any>(endpoint: string): Promise<R> => {
  let data: R;
  try {
    let response: AxiosResponse<R>;

    const headers = {
      url: credentials.apiUrl + endpoint,
      methode: VERB,
      headers: {
        Authorization: `Bearer ${credentials.accessToken}`,
        location: credentials.accountNumber,
      },
      data: postData || '',
    };

    try {
      response = await axios(headers);
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
const _apiGetErrorLogin = (apiError: any /* , data?: any */) => {
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

// # _axiosApiGet !!!
/** PROVIDE: credentials and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosApiGet = (credentials: Credentials) => <R = any>(
  endpoint: string
) => async () => _axiosApi(credentials)()()<R>(endpoint);

// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosAccountApi = (credentials: Credentials) => <R = any>(
  accountEndpoint: string
) => async () =>
  _axiosApiGet(credentials)<R>(
    endpointFormatAccount(credentials)(accountEndpoint)
  )();

// # _axiosApiPost !!!
/** PROVIDE: credentials, postData with D data type and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosApiPost = (credentials: Credentials) => <D = any>(
  postData: D
) => _axiosApi(credentials)('POST')<D>(postData);

// % endpointFormatAccount
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
const endpointFormatAccount = (credentials: Credentials) => (
  accountEndpoint: string
): string => `/accounts/${credentials.accountNumber}${accountEndpoint}`;

// # _axiosApiGetEndpointFactory !!!
/** PROVIDE: endpoint string with R return type and credentials THEN GET: a Promise<R> */
export const _axiosApiGetEndpointFactory = <R = any>(endpoint: string) => (
  credentials: Credentials
) => _axiosApiGet(credentials)<R>(endpoint);

// # _axiosApiPostEndpointFactory !!!
/** PROVIDE: endpoint string with R return type, postData with D data type and credentials THEN GET: a Promise<R> */
export const _axiosApiPostEndpointFactory = <R = any>(endpoint: string) => <
  D = any
>(
  postData: D
) => (credentials: Credentials) =>
  _axiosApiPost(credentials)<D>(postData)<R>(endpoint);

// # _delayedCrednetialsFunction
/** PROVIDE: credentials first and function of type (C: Credentials) => Promise<R> with R return type last THEN GET: an extra 'async () =>' that will return a Promise<R>, added at the end of composition chain */
export const _delayedCrednetialsFunction = (credentials: Credentials) => <
  T = any
>(
  functionX: (C: Credentials) => Promise<T>
) => async () => functionX(credentials);

// # _delayedFunctionCredentials
/** PROVIDE: function with R return type first (function of type (C: Credentials) => Promise<R>) and provide credentials last THEN GET: an extra 'async () =>' that will return a Promise<R>, added at the end of composition chain */
export const _delayedFunctionCredentials = <R = any>(
  functionX: (C: Credentials) => Promise<R>
) => (credentials: Credentials) => async () => functionX(credentials);

// # _axiosApiGetEndpointFactoryD
/** PROVIDE: endpoint string with R return type and credentials THEN GET: a '() => Promise<R>' */
// todo: verify this seem to be wrong ...
export const _axiosApiGetEndpointFactoryD = <R = any>(endpoint: string) => (
  credentials: Credentials
) =>
  _delayedFunctionCredentials(
    _axiosApiGetEndpointFactory<R>(endpoint)(credentials)
  )(credentials);

// # _axiosApiPostEndpointFactoryD
/** PROVIDE: endpoint string with R return type, postData with D data type and credentials THEN GET: a '() => Promise<R>' */
export const _axiosApiPostEndpointFactoryD = <R = any>(endpoint: string) => <
  D = any
>(
  postData: D
) => (credentials: Credentials) =>
  _delayedFunctionCredentials<R>(
    _axiosApiPostEndpointFactory<R>(endpoint)<D>(postData)
  )(credentials);
