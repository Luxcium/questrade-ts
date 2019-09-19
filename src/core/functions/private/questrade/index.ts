export { _accountEndPoinFactory, _genericEndPoint, _genericPostEndPoint, _getEndPoinFactory, _postEndPoinFactory } from './endPoinFactory';
import { Questrade } from './questrade';
(async () => {
  const qt = new Questrade('')
    (await qt.accountsApiCalls.balances).combinedBalances
  return qt;
})();
