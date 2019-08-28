// import { oAuthLogic } from '../oAuthLogic';
import { apiGet, axiosClient } from './api/apiGet';
import { Credentials, qtDefaultCreds } from './api/credentials';
import { oAuthLogic, validateAuthOptions } from './api/oAuthLogic';

export async function myModel(axiosClientX: any) {
  return async function myModel0(apiClientX: any) {
    return async function myModel1(validateAuthOptionsX: any) {
      return async function myModel2(oAuthLogicX: any) {
        return async function myModel3(credentialsX: any) {
          return async function myModel4(internalX: any) {
            return async function myModel5(externalX: any) {
              return {
                axiosClientX,
                apiClientX,
                validateAuthOptionsX,
                oAuthLogicX,
                credentialsX,
                internalX,
                externalX,
              };
            };
          };
        };
      };
    };
  };
}

export {
  apiGet,
  axiosClient,
  Credentials,
  oAuthLogic,
  qtDefaultCreds,
  validateAuthOptions,
};

/*
async function axiosClient<T>(
  axiosConfig: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
*/

/*
async function apiClient<T>(
  endpoint: string,
  _apiUrl: any,
  _accessToken: any
): Promise<T> {
*/

/*
async function oAuthLogic(
  credentials: Credentials
): Promise<Credentials> {
*/

/*
function validateAuthOptions
(credentials: Credentials, options: any) {
*/
