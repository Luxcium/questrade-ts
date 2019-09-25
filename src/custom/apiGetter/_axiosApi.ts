import { AxiosResponse, default as axios } from 'axios';
import { _apiGetErrorLogin, _generateHeader } from '../../core/api';
import { Credentials } from '../../core/libraries';

export const _axiosApi = (crendentials: Credentials) => <P>(
  VERB: string,
  postData?: P
) => async <T>(endpoint: string): Promise<T> => {
  let data: T;
  try {
    let response: AxiosResponse<T>;

    try {
      const headers = _generateHeader(endpoint, crendentials, VERB, postData);
      console.log('headers', headers);
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
