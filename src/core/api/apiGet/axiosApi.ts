import { AxiosResponse, default as axios } from 'axios';
import { Credentials } from '../../libraries';
import { apiGetErrorLogin } from './apiGetErrorLogin';
import { generateHeader } from './generateHeader';

export const axiosApi = (crendentials: Credentials) => <P>(
  VERB: string,
  postData?: P
) => async <T>(endpoint: string): Promise<T> => {
  let data: T;
  try {
    let response: AxiosResponse<T>;
    response = await axios(
      generateHeader(endpoint, crendentials, VERB, postData)
    );
    if (!response.data) {
      throw new Error();
    }
    data = response.data;
  } catch (apiError) {
    throw apiGetErrorLogin(apiError);
  }
  return data;
};

// export const axiosGET = () => axiosApi('GET');
// export const axiosPOST = (postData: any) => axiosApi('POST', postData);
