export const nothing = null;
/*
creds: {
    credentials: Credentials;
    refreshToken: string;
}
 */

/*
  {
    "access_token": "C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp",
    "token_type": "Bearer" ,
    "expires_in":  300 ,
    "refresh_token":  "aSBe7wAAdx88QTbwut0tiu3SYic3ox8F",
    "api_server":  https://api01.iq.questrade.com"
  }
*/
// const writeToken = (
//   apiVersion: string,
//   response: ClientResponse<IRefreshCreds>,
// )  => {
//   const cred  = {
//     // ...credentials,
//     ...response.data,
//     apiUrl: makeApiUrl({ apiVersion, ...response.data }),
//   };

//   writeFileSync(cred.keyFile, cred.refreshToken, 'utf8');

//   return cred;
// };

// const { infoLog } = sideEffects;
// const { errorLog } = sideEffects;
// const { echo } = sideEffects;
// const { getHttpClient } = sideEffects;
// const { warnLog } = sideEffects;
// const { echo } = sideEffects;
// const { validateToken, writeToken } = sideEffects.auth;
// const { refreshToken, credentials } = validateToken(apiOptions);

// export function configs(arg: {
//   refreshToken: string;
//   credentials: Credentials;
// }): { config: ClientRequestConfig; credentials: Credentials } {
//   return {
//     config: {
//       method: 'GET',
//       params: {
//         grant_type: 'refresh_token',
//         refresh_token: arg.refreshToken,
//       },
//       url: `${arg.credentials.authUrl}/oauth2/token`,
//     },
//     credentials: arg.credentials,
//   };
// }

// : Promise<ClientResponse<IRefreshCreds>>
/*
  export async function validateResponse(
  _response: Promise<ClientResponse>,
): Promise<ClientResponse<IRefreshCreds>> {
  const response = await _response;

  if (!response.data) {
    if (response) {
      echo('________________________________________________');
      echo(response.status, response.statusText);
      echo(response.headers);
      echo(response.request);
      echo(response.status, response.statusText);
      echo('________________________________________________');
      echo('++++++++++++++++++++++++++++++++++++++++++++++++');
    }

    throw new Error(
      '!!! validate credntials Invalid data back from http client !!!',
    );
  }

  return response;
}
  */

// export async function validateResponse(
//   _response: Promise<ClientResponse>,
// ): Promise<ClientResponse<IRefreshCreds>> {
//   const response = await _response;

//   if (!response.data) {
//     if (response) {
//       echo('________________________________________________');
//       echo(response.status, response.statusText);
//       echo(response.headers);
//       echo(response.request);
//       echo(response.status, response.statusText);
//       echo('________________________________________________');
//       echo('++++++++++++++++++++++++++++++++++++++++++++++++');
//     }

//     throw new Error(
//       '!!! validate credntials Invalid data back from http client !!!',
//     );
//   }

//   return response;
// }

// export function _getAccounts(
//   getAccounts: <R>(
//     endpoint: string,
//     handlerOptions: ProxyHandlerOptions,
//   ) => () => Promise<R>,
// ) {
//   return async (): Promise<IAccount[]> => {
//     const accounts = getAccounts<IAccounts>('/accounts', { noCaching: true });
//     const data = await accounts();

//     return data.accounts ?? [];
//   };
// }

// const time = await _getServerTime(
//   _clientGetApi(credentials, apiCallQ, proxy),
// )();

// void getTime, time_;
/*

export function _getServerTime(
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,

) {
  return async (): Promise<Date> => {
    try {
      return new Date(
        (await clientGetApi<ITime>('/time', { noCaching: true })()).time,
      );

  };
}
     */

//     export function _getServerTime(
//   clientGetApi: <R>(
//     endpoint: string,
//     handlerOptions: ProxyHandlerOptions,
//   ) => () => Promise<R>,
//   errorlog: Logger = (error: any) => error /* logger */,
// ) {
//   return async (): Promise<Date> => {
//     try {
//       return new Date(
//         (await clientGetApi<ITime>('/time', { noCaching: true })()).time,
//       );
//     } catch (error) {
//       void errorlog(`calling '/time' endpoint ${error.message}`);

//       return new Date();
//     }
//   };
// }
