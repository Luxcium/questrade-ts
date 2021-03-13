import { GetSymbolItemsList } from '../../typescript';
import { mapping, promiseOf } from '../../utils';

export const getIdsAndSymbolsList: GetSymbolItemsList = async ({
  equityList,
}) => {
  const equityList_ = promiseOf(equityList);

  return mapping(equityList_, item => {
    const symbolItems = item;
    const [symbolItem] = symbolItems;
    const symbolId = symbolItem?.symbolId || 1;

    return {
      symbolId,
      symbolItem,
      symbolItems,
    };
  });
};
