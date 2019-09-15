// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { endPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IMarkets } from '../../../types';

export const _getMarkets = (endpoint: string = '/markets') => async (
  qtApi: QtApi
) => {
  console.log(' _getMarkets:endpoint:endpoint', endpoint);
  return endPoinFactory<Promise<IMarkets>>(endpoint)(qtApi);
};
