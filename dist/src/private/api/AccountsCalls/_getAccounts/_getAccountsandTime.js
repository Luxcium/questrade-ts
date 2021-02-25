"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getServerTime = exports._getAccounts = exports.callTimeOut = void 0;
const tslib_1 = require("tslib");
const routes_1 = require("../../../routes");
function callTimeOut(proxy, apiCallQ, credentials, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const getEndpoint = routes_1._clientGetApi(credentials, apiCallQ, proxy);
        setTimeout(() => {
            callback(getEndpoint('/accounts', {
                noCaching: true,
            }));
        }, 500);
    });
}
exports.callTimeOut = callTimeOut;
// export async function callTimeOut(
//   proxy: ProxyFactory_ | undefined,
//   credentials: Credentials,
//   callback: (acct: () => Promise<IAccounts>) => void,
//   ms: number,
//   args: any[],
// ) {
//
//   setTimeout(
//     (args_: any[]) => {
//
//       return void args_;
//     },
//     ms,
//     args,
//   );
// }
// export async function nameIT(
//   proxy: ProxyFactory_ | undefined,
//   credentials: Credentials,
// ) {
//   return _clientGetApi(credentials, proxy);
// }
// const accounts = async () =>
//   getEndpoint<IAccounts>(`/accounts`, {
//     noCaching: true,
//   })();
// const time = async () =>
//   new Date(
//     (await getEndpoint<ITime>('/time/?', { noCaching: true })()).time,
//   );
// return async () => ({ accounts: await accounts(), time: await time() });
// +!! _getAccounts
/*
 _getAccounts
*/
function _getAccounts(getAccounts, errorlog = (error) => error /* logger */) {
    return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const accounts = getAccounts('/accounts', { noCaching: true });
            const data = yield accounts();
            // -
            return data.accounts;
            // -
        }
        catch (error) {
            // -
            void errorlog(error);
            return [];
        }
    });
}
exports._getAccounts = _getAccounts;
/*
_getTime
*/
// +!! _getServerTime
const _getServerTime = (clientGetApi) => () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Date((yield clientGetApi('/time/?', { noCaching: true })()).time);
});
exports._getServerTime = _getServerTime;
//  */
/*

import { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/_coreApiFunction';

// # _clientGetApi !!!
/**
 * YOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=> Promise<R>
 * /
export const _clientGetApi = (
  credentials: Credentials,
  proxy?: ProxyFactory_,
) => _coreApiFunction(credentials, proxy)('GET')(null);


*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldEFjY291bnRzYW5kVGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2FwaS9BY2NvdW50c0NhbGxzL19nZXRBY2NvdW50cy9fZ2V0QWNjb3VudHNhbmRUaW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFVQSw0Q0FBZ0Q7QUFFaEQsU0FBc0IsV0FBVyxDQUMvQixLQUEyQixFQUMzQixRQUFtQixFQUNuQixXQUF3QixFQUN4QixRQUFrRDs7UUFFbEQsTUFBTSxXQUFXLEdBQUcsc0JBQWEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWhFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxRQUFRLENBQ04sV0FBVyxDQUFZLFdBQVcsRUFBRTtnQkFDbEMsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0NBQUE7QUFmRCxrQ0FlQztBQUNELHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsOEJBQThCO0FBQzlCLHdEQUF3RDtBQUN4RCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLE1BQU07QUFDTixFQUFFO0FBRUYsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCxVQUFVO0FBQ1YsWUFBWTtBQUNaLE9BQU87QUFDUCxJQUFJO0FBRUosZ0NBQWdDO0FBQ2hDLHNDQUFzQztBQUN0Qyw4QkFBOEI7QUFDOUIsTUFBTTtBQUNOLDhDQUE4QztBQUM5QyxJQUFJO0FBQ0osK0JBQStCO0FBQy9CLDBDQUEwQztBQUMxQyx1QkFBdUI7QUFDdkIsVUFBVTtBQUVWLDJCQUEyQjtBQUMzQixjQUFjO0FBQ2QseUVBQXlFO0FBQ3pFLE9BQU87QUFFUCwyRUFBMkU7QUFDM0UsbUJBQW1CO0FBQ25COztFQUVFO0FBQ0YsU0FBZ0IsWUFBWSxDQUMxQixXQUdxQixFQUNyQixXQUFtQixDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVk7SUFFckQsT0FBTyxHQUE4QixFQUFFO1FBQ3JDLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxXQUFXLENBQVksV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUUsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQztZQUU5QixJQUFJO1lBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQUk7U0FDTDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSTtZQUNKLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXJCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDLENBQUEsQ0FBQztBQUNKLENBQUM7QUF0QkQsb0NBc0JDO0FBRUQ7O0VBRUU7QUFFRixxQkFBcUI7QUFDZCxNQUFNLGNBQWMsR0FBRyxDQUM1QixZQUdxQixFQUNyQixFQUFFLENBQUMsR0FBd0IsRUFBRTtJQUM3QixPQUFBLElBQUksSUFBSSxDQUNOLENBQUMsTUFBTSxZQUFZLENBQVEsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbkUsQ0FBQTtFQUFBLENBQUM7QUFSUyxRQUFBLGNBQWMsa0JBUXZCO0FBRUosTUFBTTtBQUVOOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm94eUhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7XG4gIENyZWRlbnRpYWxzLFxuICBJQWNjb3VudCxcbiAgSUFjY291bnRzLFxuICBJVGltZSxcbiAgTG9nZ2VyLFxuICBQcm94eUZhY3RvcnlfLFxufSBmcm9tICcuLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB0eXBlIHsgQXBpQ2FsbFFfIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9uZXh0LXJhdGUtbGltaXRlci9xdWV1ZSc7XG5pbXBvcnQgeyBfY2xpZW50R2V0QXBpIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxUaW1lT3V0KFxuICBwcm94eTogUHJveHlGYWN0b3J5XyB8IG51bGwsXG4gIGFwaUNhbGxROiBBcGlDYWxsUV8sXG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyxcbiAgY2FsbGJhY2s6IChhY2N0OiAoKSA9PiBQcm9taXNlPElBY2NvdW50cz4pID0+IHZvaWQsXG4pIHtcbiAgY29uc3QgZ2V0RW5kcG9pbnQgPSBfY2xpZW50R2V0QXBpKGNyZWRlbnRpYWxzLCBhcGlDYWxsUSwgcHJveHkpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNhbGxiYWNrKFxuICAgICAgZ2V0RW5kcG9pbnQ8SUFjY291bnRzPignL2FjY291bnRzJywge1xuICAgICAgICBub0NhY2hpbmc6IHRydWUsXG4gICAgICB9KSxcbiAgICApO1xuICB9LCA1MDApO1xufVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxUaW1lT3V0KFxuLy8gICBwcm94eTogUHJveHlGYWN0b3J5XyB8IHVuZGVmaW5lZCxcbi8vICAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuLy8gICBjYWxsYmFjazogKGFjY3Q6ICgpID0+IFByb21pc2U8SUFjY291bnRzPikgPT4gdm9pZCxcbi8vICAgbXM6IG51bWJlcixcbi8vICAgYXJnczogYW55W10sXG4vLyApIHtcbi8vXG5cbi8vICAgc2V0VGltZW91dChcbi8vICAgICAoYXJnc186IGFueVtdKSA9PiB7XG4vL1xuLy8gICAgICAgcmV0dXJuIHZvaWQgYXJnc187XG4vLyAgICAgfSxcbi8vICAgICBtcyxcbi8vICAgICBhcmdzLFxuLy8gICApO1xuLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gbmFtZUlUKFxuLy8gICBwcm94eTogUHJveHlGYWN0b3J5XyB8IHVuZGVmaW5lZCxcbi8vICAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuLy8gKSB7XG4vLyAgIHJldHVybiBfY2xpZW50R2V0QXBpKGNyZWRlbnRpYWxzLCBwcm94eSk7XG4vLyB9XG4vLyBjb25zdCBhY2NvdW50cyA9IGFzeW5jICgpID0+XG4vLyAgIGdldEVuZHBvaW50PElBY2NvdW50cz4oYC9hY2NvdW50c2AsIHtcbi8vICAgICBub0NhY2hpbmc6IHRydWUsXG4vLyAgIH0pKCk7XG5cbi8vIGNvbnN0IHRpbWUgPSBhc3luYyAoKSA9PlxuLy8gICBuZXcgRGF0ZShcbi8vICAgICAoYXdhaXQgZ2V0RW5kcG9pbnQ8SVRpbWU+KCcvdGltZS8/JywgeyBub0NhY2hpbmc6IHRydWUgfSkoKSkudGltZSxcbi8vICAgKTtcblxuLy8gcmV0dXJuIGFzeW5jICgpID0+ICh7IGFjY291bnRzOiBhd2FpdCBhY2NvdW50cygpLCB0aW1lOiBhd2FpdCB0aW1lKCkgfSk7XG4vLyArISEgX2dldEFjY291bnRzXG4vKlxuIF9nZXRBY2NvdW50c1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QWNjb3VudHMoXG4gIGdldEFjY291bnRzOiA8Uj4oXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICBoYW5kbGVyT3B0aW9uczogUHJveHlIYW5kbGVyT3B0aW9ucyxcbiAgKSA9PiAoKSA9PiBQcm9taXNlPFI+LFxuICBlcnJvcmxvZzogTG9nZ2VyID0gKGVycm9yOiBhbnkpID0+IGVycm9yIC8qIGxvZ2dlciAqLyxcbikge1xuICByZXR1cm4gYXN5bmMgKCk6IFByb21pc2U8SUFjY291bnRbXT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGdldEFjY291bnRzPElBY2NvdW50cz4oJy9hY2NvdW50cycsIHsgbm9DYWNoaW5nOiB0cnVlIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFjY291bnRzKCk7XG5cbiAgICAgIC8vIC1cbiAgICAgIHJldHVybiBkYXRhLmFjY291bnRzO1xuICAgICAgLy8gLVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAtXG4gICAgICB2b2lkIGVycm9ybG9nKGVycm9yKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcbn1cblxuLypcbl9nZXRUaW1lXG4qL1xuXG4vLyArISEgX2dldFNlcnZlclRpbWVcbmV4cG9ydCBjb25zdCBfZ2V0U2VydmVyVGltZSA9IChcbiAgY2xpZW50R2V0QXBpOiA8Uj4oXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICBoYW5kbGVyT3B0aW9uczogUHJveHlIYW5kbGVyT3B0aW9ucyxcbiAgKSA9PiAoKSA9PiBQcm9taXNlPFI+LFxuKSA9PiBhc3luYyAoKTogUHJvbWlzZTxEYXRlPiA9PlxuICBuZXcgRGF0ZShcbiAgICAoYXdhaXQgY2xpZW50R2V0QXBpPElUaW1lPignL3RpbWUvPycsIHsgbm9DYWNoaW5nOiB0cnVlIH0pKCkpLnRpbWUsXG4gICk7XG5cbi8vICAqL1xuXG4vKlxuXG5pbXBvcnQgeyBDcmVkZW50aWFscywgUHJveHlGYWN0b3J5XyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgX2NvcmVBcGlGdW5jdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvZW5kLXBvaW50LWNvbm5lY3Rvci9fY29yZUFwaUZ1bmN0aW9uJztcblxuLy8gIyBfY2xpZW50R2V0QXBpICEhIVxuLyoqXG4gKiBZT1UgUFJPVklERTogY3JlZGVudGlhbHMgYW5kIGVuZHBvaW50IHN0cmluZyB3aXRoIDxSPiByZXR1cm4gdHlwZSxcbiAqIFRIRU4gWU9VIEdFVDogKCApPT4gUHJvbWlzZTxSPlxuICogL1xuZXhwb3J0IGNvbnN0IF9jbGllbnRHZXRBcGkgPSAoXG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyxcbiAgcHJveHk/OiBQcm94eUZhY3RvcnlfLFxuKSA9PiBfY29yZUFwaUZ1bmN0aW9uKGNyZWRlbnRpYWxzLCBwcm94eSkoJ0dFVCcpKG51bGwpO1xuXG5cbiovXG4iXX0=