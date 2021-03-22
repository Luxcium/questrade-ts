import { IEquitySymbol } from '../../typescript';
import { promiseOf } from '../../utils';
import { applyListMapping } from '../../utils/mapping-function';

export const getIDsAndSymbolsList = async <
  T extends IEquitySymbol[] = IEquitySymbol[]
>({
  equityList,
}: {
  equityList: any;
}) => {
  const equityList_ = promiseOf(equityList);
  const mapper = (listItem: IEquitySymbol[]) => {
    const symbolItems = listItem;
    const [symbolItem] = symbolItems;
    const symbolId = symbolItem?.symbolId || 1;

    return {
      symbolId,
      symbolItem,
      symbolItems,
    };
  };

  return applyListMapping<T>(equityList_)(mapper);
};
