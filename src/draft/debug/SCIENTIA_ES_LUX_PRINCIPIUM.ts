import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { StockSymbol } from '../../schema/stock-symbol';
import { IStockSymbol, xIdsAndSymbList } from '../../typescript';
import { getSnP500List, mapping } from '../../utils';
import { getEquitySymbList } from '../code/getEquitySymbolsList';
import { getSymbol } from '../code/getSymbol';
import { getSymbolIDSearchAndStockSymbolDbSave } from '../code/getSymbolIdEquitySymbolAndStockSymbolDbSave';
import { mainRedis } from '../code/mainRedis';
import { saveMongo } from '../code/saveMongo';
import { getIdsAndSymbolsList } from '../code/willGetSymbolIdAndFirstSymbol';

export async function SCIENTIA_ES_LUX_PRINCIPIUM(apiCallQ: SimpleQueue) {
  // activate the api for later use
  const { qtApi } = await mainRedis();
  const equityList = getEquitySymbList({ qtApi, symbolList: getSnP500List });
  const idsAndSymbList: xIdsAndSymbList = getIdsAndSymbolsList({
    ...(await equityList),
  });

  const anyVal = await Promise.all(
    (
      await Promise.all(
        await mapping({
          list: idsAndSymbList,
          mapper: ({ symbolId }: { symbolId: number }) =>
            getSymbol({ qtApi, symbolId }),
        }),
      )
    ).map(async (stockSymbol: IStockSymbol) => {
      const config = { Model: StockSymbol, value: stockSymbol };

      apiCallQ.addToQueue({
        config,
        fn: saveMongo,
      });

      return stockSymbol;
    }),
  );

  void anyVal;
  // echo(stockSymbolsList);

  return getSymbolIDSearchAndStockSymbolDbSave(qtApi, apiCallQ, idsAndSymbList);
}
