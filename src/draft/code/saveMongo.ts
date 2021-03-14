import chalk from 'chalk';
import mongoose from 'mongoose';

import { FnSaveMongo } from '../../typescript';

export const saveMongo: FnSaveMongo = async <
  T,
  D extends mongoose.Document<T>
>(config: {
  id?: number;
  Model: mongoose.Model<D>;
  serverTime?: Date;
  value: T;
}): Promise<void | D> => {
  const { value, Model, serverTime = new Date(), id = Number.NaN } = config;

  // console.log('will process');

  const doc = new Model({ ...value, serverTime });
  if (id) {
    doc._id = id as any;
    doc.id = id;
  }

  return doc
    .save()
    .then(document => {
      console.log('Document saved →', { document });

      return document;
    })
    .catch(error => {
      const { message } = error;
      if (typeof message === 'string' && message.includes('duplicate')) {
        return console.error(chalk.white.bgBlack(message));
      }

      return console.error(chalk.redBright('Model.save() → ERROR:'), error);
    });
};
