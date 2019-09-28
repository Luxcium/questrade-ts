// tslint:disable: ordered-imports
import { apiFunctions } from './core/classes/QuestradeBase/private/getDataFromApi';
import { day } from './core/utils/timeutil/';
import { _credentialsFactory } from './custom';
export const log = console.log;
const myRefreshToken = 'qd0AJcnxOGOKpXzvqzIbzKwgHy3Rm3XJ0';
(async () => {
  const startTime = new Date(Date.now() - day(3)).toISOString();
  const endTime = new Date(Date.now()).toISOString();

  const cred = await _credentialsFactory(myRefreshToken);
  const qtApi = apiFunctions(cred);
  // const getActivities = _getActivities(cred);
  // const activitiesUntil = getActivities(startTime);
  // const activities = activitiesUntil(endTime);
  // log(
  // await activities();
  // );

  // log(await qtApi.postGetOptionsQuotes());
  // log(await qtApi.postGetStrategiesQuotes());
  // log(await qtApi.getCandles());
  // log(await qtApi.getOptionsSymbols());
  // log(await qtApi.getQuotesFromSymbolID());
  // log(await qtApi.getSymbolFromSymbolID());
  // log(await qtApi.getSymbolSearch());

  // log(await qtApi.getAccounts());
  // log(await qtApi.getServerTime());
  // log(await qtApi.getMarkets());
  log(await qtApi.getActivities(startTime)(endTime));
  // log(await qtApi.getExecutions(startTime)(endTime));
  // log(await qtApi.getOrders('Closed')(startTime)(endTime));
  // log(await qtApi.getOrderIds([546964950, 546966570]));
  // log(await qtApi.getBalances());
  // log(await qtApi.getPositions());
  log(await qtApi.OptionsQuotes()()()()());
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);

/*
















*/
