import mongoose from 'mongoose';

export async function mogooseConnect(
  once: {
    onlyOnceMain: boolean;
    onlyOnceMongoose: number;
  },
  URI: string = 'mongodb://127.0.0.1:27017/test',
) {
  if (once.onlyOnceMongoose > 0) {
    throw new Error('Error when trying to db.connect(): ALREADY CONNECTED');
  }

  once.onlyOnceMongoose += 1;

  let connection: typeof mongoose;
  try {
    connection = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('db.connect() ERROR:', error.message);
    // throw new Error(`Error when trying to db.connect(): ${error.message}`);
    throw error;
  }

  console.log("we're connected!");
  console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

  return {
    disconnect: async () => {
      console.log('db disconnected!');
      await connection.disconnect().then(_ => {
        once.onlyOnceMongoose -= 1;
        console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

        return void _;
      });
    },
  };
}
