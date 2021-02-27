import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  name: String,
});

export const User = mongoose.model('user', UserSchema);
export const joe = new User({ name: 'Joe' });

export async function before() {
  const mongo = await mongoose.connect('mongodb://0.0.0.0:49153/users_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  joe.save();

  mongo.disconnect();
  // .then(mongooseInstance => {
  //   return mongoose.connection
  //     .once('open', () => {

  //       mongooseInstance.disconnect();
  //     })
  //     .on('error', error => {
  //       console.warn('Warning!!!!!!!', error);
  //       mongooseInstance.disconnect();
  //     });
  // })
  // .catch(error => console.warn('Warning!!!!!!!', error));
}

before();
