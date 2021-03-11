import { GetSymbolItemsList } from '../typescript';
import { mapping } from './mapping';

export const getSymbolItemsList: GetSymbolItemsList = async ({
  equitySymbolsList,
}) => {
  return mapping(equitySymbolsList, item => {
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
