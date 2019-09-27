import { AxiosResponse, default as axios } from 'axios';
import { Credentials } from '../../libraries';
import { _apiGetErrorLogin } from './_apiGetErrorLogin';
import { _generateHeader } from './_generateHeader';

export const _axiosApi = (crendentials: Credentials) => <P>(
  VERB: string,
  postData?: P
) => async <T>(endpoint: string): Promise<T> => {
  let data: T;
  try {
    let response: AxiosResponse<T>;

    try {
      response = await axios(
        _generateHeader(endpoint, crendentials, VERB, postData)
      );
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
