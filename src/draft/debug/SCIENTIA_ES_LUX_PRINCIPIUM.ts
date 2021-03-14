import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { StockSymbol } from '../../schema/stock-symbol';
import { IStockSymbol, xIdsAndSymbList } from '../../typescript';
import { getSnP500List, mapping } from '../../utils';
import { getEquitySymbList } from '../code/get-equity-symbols-list';
import { getSymbol } from '../code/get-symbol';
import { mainRedis } from '../code/main-redis';
import { getIdsAndSymbolsList } from '../code/will-get-symbol-id-and-first-symbol';
import { saveValueToDB } from './saveValueToDB';

export async function SCIENTIA_ES_LUX_PRINCIPIUM(dbCallQ: SimpleQueue) {
  // activate the api for later use
  // ** // ** // ** // ** // ** //
  const { qtApi } = await mainRedis();
  // ** // ** // ** // ** // ** //
  const step0 = getEquitySymbList({ qtApi, symbolList: getSnP500List });
  // ** // ** // ** // ** // ** //
  const step1: xIdsAndSymbList = getIdsAndSymbolsList({
    ...(await step0),
  });

  // ** // ** // ** // ** // ** //
  const step2 = ({ symbolId }: { symbolId: number }) =>
    getSymbol({ qtApi, symbolId });
  // ** // ** // ** // ** // ** //

  const step3 = await mapping({ list: step1, mapper: step2 });
  // ** // ** // ** // ** // ** //
  // ** // ** // ** // ** // ** //
  const step5 = async (stockSymbol: IStockSymbol) => {
    // const config = { Model: StockSymbol, value: stockSymbol };

    saveValueToDB(dbCallQ)({
      Model: StockSymbol,
      value: stockSymbol,
    });

    return stockSymbol;
  };

  const step6 = await fnStep6(step3);
  const step7 = fnStep7(step5, step6);
  const step8 = await fnStep8(step7);
  console.log(step8);

  return step8;
}
// return getSymbolIDSearchAndStockSymbolDbSave(qtApi, apiCallQ, idsAndSymbList);

const fnStep7 = (step5: any, step6: any) => step6.map(step5);
const fnStep6 = async (step7: any) => Promise.all(step7);
const fnStep8 = fnStep6;
