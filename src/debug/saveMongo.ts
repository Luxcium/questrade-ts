import chalk from 'chalk';
import mongoose from 'mongoose';

export async function saveMongo<T, D extends mongoose.Document<T>>(config: {
  value: T;
  Model: mongoose.Model<D>;
  serverTime?: Date;
}): Promise<void | D> {
  const { value, Model, serverTime = new Date() } = config;

  // console.log('will process');

  const doc = new Model({ ...value, serverTime });

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
}
