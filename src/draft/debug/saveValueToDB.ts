import mongoose from 'mongoose';

import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
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
  ) => (id?: number) => saveValueToDB(simpleQueue)({ Model, id, value });
}

export function saveValueToDB(simpleQueue: SimpleQueue) {
  return <T, D extends mongoose.Document<T>>({
    id,
    Model,
    value,
  }: {
    id?: number;
    Model: mongoose.Model<D>;
    value: T;
  }) =>
    simpleQueue.addToQueue({
      config: { Model, id, value },
      fn: saveMongo,
    });
}
