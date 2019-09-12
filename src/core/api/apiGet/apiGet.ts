import { AxiosResponse, default as axios } from 'axios';
import { Credentials, RawApiGet } from '../../libraries';
import { apiGetErrorLogin } from './apiGetErrorLogin';
import { generateHeader } from './generateHeader';

export const apiGet: RawApiGet = (crendentials: Credentials) => {
  return async <T>(endpoint: string): Promise<T> => {
    let data: T;
    try {
      let response: AxiosResponse<T>;
      response = await axios(generateHeader(endpoint, crendentials));
      if (!response.data) {
        throw new Error();
      }
      data = response.data;
    } catch (apiError) {
      throw apiGetErrorLogin(apiError);
    }
    return data;
  };
};
