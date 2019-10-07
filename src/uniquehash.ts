import crypto from 'crypto';

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach(element => {
//   const some = crypto.createHash('sha1');
//   some.write(Date.now().toString() + element);
//   console.log(some.digest('base64').toString());
// });

export const getHash = (data: string) => {
  const sha1 = crypto.createHash('sha1');
  sha1.write(data);
  return sha1.digest('hex').toString();
};

const myHash = '6df9d380e8fdfb71ad5942cb6a656811be611';
console.log(myHash.slice(0, 6));
// console.log(getHash(Date.now().toString()).slice(3, 6));
