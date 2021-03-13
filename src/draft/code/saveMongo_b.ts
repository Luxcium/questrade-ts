import mongoose from 'mongoose';


export async function saveMongo<T, D extends mongoose.Document<T>>(config: {
  value: T;
  Model: mongoose.Model<D>;
}): Promise<void | D> {
  const { value, Model } = config;
  console.log('will process');

  const wm1 = new WeakMap<{}, D | null>();
  const ob1 = {};

  wm1.set(ob1, new Model(value));

  return (wm1.get(ob1) as D)
    .save()
    .then(result => {
      console.log('Model.save() result:', result);

      return result;
    })
    .catch(error => {
      const { message } = error;
      if (typeof message === 'string' && message.includes('duplicate')) {
        return console.error(message);
      }

      return console.error('Model.save() → ERROR:', error);
    })
    .finally(() => {
      wm1.delete(ob1);
    });
}
