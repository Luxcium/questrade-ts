import { apiClient } from '../apiClient';
import { axiosClient, AxiosRequestConfig, AxiosResponse } from '../axiosClient';
import { Credentials } from '../Credentials';
import { oAuthLogic } from '../oAuthLogic';
import { qtDefaultCreds } from '../qtDefaultCreds';
import { validateAuthOptions } from '../validateAuthOptions';

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
  apiClient,
  axiosClient,
  AxiosRequestConfig,
  AxiosResponse,
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
