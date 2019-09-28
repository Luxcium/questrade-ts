// const { questrade } = await tokenConnection(seedToken);

/*

// typescript
import { tokenConnection } from 'questrade-ts';

// using async Immediately Invoked Function Expressions to avoid using then().catch()
(async () => {
  // always put your code in a try catch block

  // you do not have to put the token in plain text you should import it from elsewhere
  const seedToken = 'YOUR-TOKEN-HERE_jKi1YCwCjAMJFugwD4A8cgb0';

  try {
    const { questrade } = await tokenConnection(seedToken);

    // using qt for short if you prefer
    const qt = questrade;

    const symb = await qt.searchSymbol('aapl');

    console.log(symb);

    console.log(await qt.getQuote(symb.symbolId));
  } catch (error) {
    // manage your errors here if needed
    console.log(error);
  }
})();

*/
