import mongoose from 'mongoose';
import { once } from './main';


export async function mogooseConnect() {
  if (once.onlyOnceMongoose > 0) {
    throw new Error('Error when trying to db.connect(): ALREADY CONNECTED');
  }

  once.onlyOnceMongoose += 1;

  let connection: typeof mongoose;
  try {
    connection = await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('db.connect() ERROR:', error);

    throw new Error(`Error when trying to db.connect(): ${error.message}`);
  }

  console.log("we're connected!");
  console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

  return {
    disconnect: async () => {
      console.log(
        'db disconnected!',
        await connection.disconnect().then(t => {
          once.onlyOnceMongoose -= 1;
          console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

          return t;
        })
      );
    },
  };
}
