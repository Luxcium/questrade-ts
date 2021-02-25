"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getOrdersByIds = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../../../../utils");
// + _getOrderByIds
/** _getOrders */
const _getOrdersByIds = (clientAccountGetApi, errorlog = (...error) => error) => (orderId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        //
        return (yield clientAccountGetApi(`/orders?ids=${utils_1.urlEncode(orderId.join(','))}`)()).orders;
    }
    catch (error) {
        void errorlog(error);
        return [];
    }
});
exports._getOrdersByIds = _getOrdersByIds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldE9yZGVyc0J5SWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL0FjY291bnRzQ2FsbHMvX2dldE9yZGVycy9fZ2V0T3JkZXJzQnlJZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE4QztBQUU5QyxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ1YsTUFBTSxlQUFlLEdBQUcsQ0FDN0IsbUJBQXFFLEVBQ3JFLFdBQW1CLENBQUMsR0FBRyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFDN0MsRUFBRSxDQUFDLENBQU8sT0FBaUIsRUFBcUIsRUFBRTtJQUNsRCxJQUFJO1FBQ0YsRUFBRTtRQUNGLE9BQU8sQ0FDTCxNQUFNLG1CQUFtQixDQUN2QixlQUFlLGlCQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQzlDLEVBQUUsQ0FDSixDQUFDLE1BQU0sQ0FBQztLQUNWO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFoQlcsUUFBQSxlQUFlLG1CQWdCMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElPcmRlciwgSU9yZGVycywgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB1cmxFbmNvZGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5cbi8vICsgX2dldE9yZGVyQnlJZHNcbi8qKiBfZ2V0T3JkZXJzICovXG5leHBvcnQgY29uc3QgX2dldE9yZGVyc0J5SWRzID0gKFxuICBjbGllbnRBY2NvdW50R2V0QXBpOiA8Uj4oYWNjb3VudEVuZHBvaW50OiBzdHJpbmcpID0+ICgpID0+IFByb21pc2U8Uj4sXG4gIGVycm9ybG9nOiBMb2dnZXIgPSAoLi4uZXJyb3I6IGFueVtdKSA9PiBlcnJvcixcbikgPT4gYXN5bmMgKG9yZGVySWQ6IG51bWJlcltdKTogUHJvbWlzZTxJT3JkZXJbXT4gPT4ge1xuICB0cnkge1xuICAgIC8vXG4gICAgcmV0dXJuIChcbiAgICAgIGF3YWl0IGNsaWVudEFjY291bnRHZXRBcGk8SU9yZGVycz4oXG4gICAgICAgIGAvb3JkZXJzP2lkcz0ke3VybEVuY29kZShvcmRlcklkLmpvaW4oJywnKSl9YCxcbiAgICAgICkoKVxuICAgICkub3JkZXJzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZvaWQgZXJyb3Jsb2coZXJyb3IpO1xuXG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuIl19