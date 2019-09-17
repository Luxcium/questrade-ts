// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
import { _endPoinFactory } from '.';
import { QtApi } from '../../../libraries';
import { IMarkets } from '../../../types';

export const _getMarkets = (endpoint: string = '/markets') => (
  qtApi: QtApi
) => async () => {
  console.log(' _getMarkets:endpoint:endpoint', endpoint);
  return _endPoinFactory<Promise<IMarkets>>(endpoint)(qtApi)();
};
