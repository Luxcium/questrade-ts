import { AxiosResponse, default as axios } from 'axios';
import { _apiGetErrorLogin } from '..';
import { Credentials } from '../../core/libraries';

export const _axiosApi = (credentials: Credentials) => (VERB: string) => <
  P = any
>(
  postData?: P | null
) => async <T = any>(endpoint: string): Promise<T> => {
  let data: T;
  try {
    let response: AxiosResponse<T>;

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
      throw new Error();
    }
    data = response.data;
  } catch (apiError) {
    throw _apiGetErrorLogin(apiError);
  }
  return data;
};
