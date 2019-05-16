/** @format */

import { main } from './index';
// will void this token bfore publishing do not use this token
const seedToken = '8gVXfsNeGezpqbnRYF5jrgxwBLFFjABb0';
main(seedToken).catch(error =>
  console.log('MAINERROR in PROTO TESTING:', error)
);
