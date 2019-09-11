// -------------------------------------------------------------------------- //
import { AxiosResponse, default as axios } from 'axios';
import { Credentials, RawApiGet } from '../../libraries';
import { apiGetErrorLogin } from './apiGetErrorLogin';
import { generateHeader } from './generateHeader';
// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

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
// -------------------------------------------------------------------------- //
