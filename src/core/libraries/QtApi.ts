// -------------------------------------------------------------------------- //
import { ApiGet } from './ApiGet';
import { Credentials } from './Credentials';
// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //
export interface QtApi {
  get: ApiGet;
  credentials: Credentials;
}
// -------------------------------------------------------------------------- //
