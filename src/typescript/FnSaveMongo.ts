import mongoose from 'mongoose';

export type FnSaveMongo = <T, D extends mongoose.Document<T>>(config: {
  value: T;
  Model: mongoose.Model<D>;
  id?: number;
  serverTime?: Date;
}) => Promise<void | D>;
