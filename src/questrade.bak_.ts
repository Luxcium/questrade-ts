// _getActivities<any>()
// _getPositions<any>(qtApi);
// function getUrl(= endpoint:string,)

// _getSymbols/:id
// _getSymbols/search
// _getSymbols/:id/options
// _getMarkets
// _getMarkets/quotes/:id
// _getMarkets/quotes/options
// _getMarkets/quotes/strategies
// _getMarkets/candles/:id

// '/markets';

// _getPositions() '/positions'
// _getBalances() '/balances'
// _getExecutions() '/executions'
// _getOrders() '/orders'
// _getActivities() '/activities'

// [/:orderId]

// _getAccounts
// _getAccounts/:id
// _getAccounts/:id
// _getAccounts/:id
// _getAccounts/:id
// _getAccounts/:id

// _getSymbols/:id
// _getSymbols/search
// _getSymbols/:id/options
// _getMarkets
// _getMarkets/quotes/:id
// _getMarkets/quotes/options
// _getMarkets/quotes/strategies
// _getMarkets/candles/:id
// const qtApi : any = null

// questrade('0I55OUTM7zHQZbG9AiwA5vY3zQY6W6qt0')
//   .then(async will => {
//     console.log(will.getAcountNumber());
//     console.log(await will.getAccounts());
//     // console.log(await will.getActivities());
//     console.log(await will.getBalances());
//     console.log(will.getCredentials());
//     console.log(await will.getExecutions());
//     console.log(await will.getMarkets());
//     console.log(await will.getOrders());
//     console.log(await will.getPositions());
//     console.log(await will.getPrimaryAccountNumber());

//     // await will.getMarkets();
//     // console.log('- -\n',await will.getAccounts());
//     // console.log('- -\n',await will.getActivities());
//     // console.log((await will.getBalances()).combinedBalances.USD.cash);
//     // console.log('- -\n', await will.getSODPerCurrencyBalances());
//     // console.log('- -\n',await will.getBalances());
//     // console.log('- -\n',await will.getExecutions());
//     // console.log('- -\n',await will.getMarkets());
//     // console.log('- -\n',await will.getOrders());
//     // console.log('- -\n',await will.getPositions());
//     // console.log('- -\n',await will.getPrimaryAccountNumber());
//     // console.log('- -\n',will.credentials);
//   })
//   .then(_ => console.log('-OK-'))
//   .catch(err => console.error(err.message));
