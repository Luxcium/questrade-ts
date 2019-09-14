import { AxiosResponse, default as axios } from 'axios';
import { Credentials, RawApiGet, RawApiPost } from '../../libraries';
import { apiGetErrorLogin } from './apiGetErrorLogin';
import { generateHeader } from './generateHeader';

export const _apiGet: RawApiGet = (crendentials: Credentials) => {
  return <T>(endpoint: string) =>
    axiosApi(crendentials)('GET', null)<T>(endpoint);
};

export const _apiPOST: RawApiPost = (crendentials: Credentials) => {
  return <T, P = any>(endpoint: string, postData: P) =>
    axiosApi(crendentials)('POST', postData)<T>(endpoint);
};

export const axiosApi = (crendentials: Credentials) => (
  VERB: string,
  postData?: any
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
