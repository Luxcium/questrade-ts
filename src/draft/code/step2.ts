import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { EquitySymbolDocumentModel } from '../../schema/equity-symbol';
import { saveMongo } from './saveMongo';

export async function step2(
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<string[]>,
) {
  return Promise.all(
    (await list).map(async symbol => {
      const returnValue = await qtApi.search.stock(symbol);
      returnValue.map(item => {
        const config = { Model: EquitySymbolDocumentModel, value: item };

        return apiCallQ.addToQueue({
          config,
          fn: conf => saveMongo(conf),
        });
      });

      return returnValue;
    }),
  );
}
