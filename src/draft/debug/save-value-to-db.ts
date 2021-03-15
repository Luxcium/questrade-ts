import mongoose from 'mongoose';

import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { SymbolInfoModel } from '../../schema/symbol-info';
import { IEquitySymbol } from '../../typescript';
import { saveMongo } from '../code/save-mongo';

/*
mapping
mapper
mappable
mapped

const mapped =  mappable.map(mapper)

 */
export function mapValueToDB(simpleQueue: SimpleQueue) {
  return <T, D extends mongoose.Document<T>>(Model: mongoose.Model<D>) => (
    value: T,
  ) => saveValueToDB(simpleQueue)({ Model, value });
}

export function symbolInfoDBMapper(dbCallCue: SimpleQueue) {
  return async ({ symbolItem }: { symbolItem: IEquitySymbol }) => {
    return saveValueToDB(dbCallCue)({
      Model: SymbolInfoModel,
      value: symbolItem,
    });
  };
}

export function saveValueToDB(simpleQueue: SimpleQueue) {
  return <T, D extends mongoose.Document<T>>({
    Model,
    value,
  }: {
    Model: mongoose.Model<D>;
    value: T;
  }) =>
    simpleQueue.addToQueue<D>({
      config: { Model, value },
      fn: saveMongo,
    });
}
