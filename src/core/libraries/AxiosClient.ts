// - ------------------------------------------------------------------------ //
import { AxiosRequestConfig, AxiosResponse } from 'axios';
// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //
export type AxiosClient<T> = (
  axiosConfig: AxiosRequestConfig
) => Promise<AxiosResponse<T>>;
// -------------------------------------------------------------------------- //
