// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { QtApi } from '../../../libraries';

export const _accountEndPoinFactory = <T>(endpoint: string) => {
  return (qtApi: QtApi) => async (): Promise<T> =>
    qtApi.accountGet<T>(endpoint);
};
