import {
  _getAccounts,
  _getActivities,
  _getBalances,
  _getExecutions,
  _getOrders,
  _getTime,
} from '.';
export const _rawApiAccountCalls = () => {
  return {
    ACTIVITIES: _getActivities,
    ORDERS: _getOrders,
    EXECUTIONS: _getExecutions,
    BALANCES: _getBalances,
    ACCOUNTS: _getAccounts,
    TIME: _getTime,
  };
};
