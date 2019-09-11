// -------------------------------------------------------------------------- //
import { Credentials } from '../../libraries';
// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //
export const generateHeader = (endpoint: string, credentials: Credentials) => {
  return {
    url: credentials.apiUrl + endpoint,
    methode: 'GET',
    headers: {
      Authorization: `Bearer ${credentials.accessToken}`,
      location: credentials.accountNumber,
    },
  };
};
// -------------------------------------------------------------------------- //
