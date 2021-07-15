import {
  IEquitySymbol,
  MappableList,
  MappableListAsync,
} from '../../typescript';
import { promiseOf } from '../../utils';
import { applyListMapping } from '../../utils/mapping-function';

export const getIDsAndSymbolsList = async <
  T extends MappableList<IEquitySymbol> = IEquitySymbol[]
>({
  equityList,
}: {
  equityList: MappableListAsync<T>; // T | Promise<T>;
}) => {
  const equityList_ = await promiseOf(equityList);
  const mapper = (listItem: T) => {
    const symbolItems = listItem;
    const [symbolItem] = symbolItems;
    const symbolId = symbolItem?.symbolId || 0;

    return {
      symbolId,
      symbolItem,
      symbolItems,
    };
  };

  return applyListMapping<T>(equityList_)(mapper);
};
