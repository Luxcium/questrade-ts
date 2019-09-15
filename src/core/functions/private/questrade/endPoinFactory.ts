// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { QtApi } from '../../../libraries';

export const endPoinFactory = <T>(endpoint: string) => {
  return async (qtApi: QtApi): Promise<T> => qtApi.get<T>(endpoint);
};
