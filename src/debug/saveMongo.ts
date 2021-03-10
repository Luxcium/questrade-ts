import mongoose from 'mongoose';

export async function saveMongo<T, D extends mongoose.Document<T>>(config: {
  value: T;
  Model: mongoose.Model<D>;
}): Promise<void | D> {
  const { value, Model } = config;
  console.log('will process');

  const doc = new Model(value);

  return doc
    .save()
    .then(result => {
      console.log('Document saved →', result);

      return result;
    })
    .catch(error => {
      const { message } = error;
      if (typeof message === 'string' && message.includes('duplicate')) {
        return console.error('Model.save() → ERROR:', message);
      }

      return console.error('Model.save() → ERROR:', error);
    });
}
