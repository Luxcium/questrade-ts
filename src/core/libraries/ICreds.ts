// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

export interface ICreds {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  api_server: string;
}
