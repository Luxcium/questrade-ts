import { GetSymbolItemsList } from '../../typescript';
import { mapping } from '../../utils';

export const getIdsAndSymbList: GetSymbolItemsList = async allEquitiesList => {
  return mapping(allEquitiesList, item => {
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
