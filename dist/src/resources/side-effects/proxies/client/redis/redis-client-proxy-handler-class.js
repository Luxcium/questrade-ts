"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisProxyHandler = exports.RedisQtApiProxyHandlerClass = void 0;
const tslib_1 = require("tslib");
/* eslint-disable radar/no-duplicate-string */
// #region IMPORTS ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― $>
const ioredis_1 = tslib_1.__importDefault(require("ioredis"));
const redis_json_1 = tslib_1.__importDefault(require("redis-json"));
const utils_1 = require("../../../../../utils");
const __1 = require("../../..");
const reflexion_logger_proxy_handler_abstarct_class_1 = require("../../core/reflexion-logger-proxy-handler-abstarct-class");
class RedisQtApiProxyHandlerClass extends reflexion_logger_proxy_handler_abstarct_class_1.ProxyHandlerAbstractClass {
    // private jsonCache: JSONCache<CachedApiResponse>;
    constructor(handlerOptions) {
        super(handlerOptions);
        Object.defineProperty(this, "handlerOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: handlerOptions
        });
        Object.defineProperty(this, "proxy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                class: 'RedisQtApiProxyHandlerClass',
                extends: 'ReflexionLoggerProxyHandlerAbstractClass<T>',
                implements: 'ProxyHandler<T>',
                proxy: 'Redis QtApi Caching Proxy',
            }
        });
        this.handlerOptions.notFromCache = false;
        this.handlerOptions.noCaching = false;
    }
    apply(target, thisArg, argArray) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const myRedis = new ioredis_1.default();
            try {
                const urlPath = utils_1.getQtUrlPathFromArgs(argArray);
                const { URL_HSH } = utils_1.getUrlHash(urlPath);
                /*
          
           data: { time: '2021-01-27T00:58:33.579000-05:00' },
            UDATAGRAM: 'UDATAGRAM:20D0F6BB5559ACF',
            URL_HSH: 'URL:8081F947BB07DB0A4A',
            path: '/v1/time',
            responseFromCache: true,
            responseFromApi: false,
            statusText: 'OK'
           */
                const jsonCache = new redis_json_1.default(myRedis, {
                    prefix: 'cache:response:',
                });
                // const isInExclusionList = ['URL:8081F947BB07DB0A4A'].some(
                //   uRL => URL === 'URL:8081F947BB07DB0A4A',
                // );
                if (this.handlerOptions.notFromCache !== true) {
                    utils_1.id0({ it: this.handlerOptions });
                    // $ READ FROM CACHE ―――――――――――――――――――――――――――――――――――――――――――――――――――$>
                    const responseFromCache = yield jsonCache.get(URL_HSH);
                    if ((responseFromCache === null || responseFromCache === void 0 ? void 0 : responseFromCache.responseFromCache) === true) {
                        myRedis.disconnect();
                        // +RETURN VALUE FROM CACHE ――――――――――――――――――――――――――――――――――――――――――$>
                        return utils_1.id0(responseFromCache);
                    }
                }
                else {
                    __1.ech0({ MESSGAE: 'NOT FROM CACHE' });
                }
                // $ CREATE VALUE TO CACHE ―――――――――――――――――――――――――――――――――――――――――――――――$>
                const responseFromApi = yield Reflect.apply(target, thisArg, argArray);
                const dataToHash = responseFromApi.data;
                const urlAndDataHashes = utils_1.getUrlAndDataHashes(urlPath, dataToHash);
                const { dataToCache } = urlAndDataHashes, urlAndDataRest = tslib_1.__rest(urlAndDataHashes, ["dataToCache"]);
                const configFromApi = responseFromApi.config;
                const headersFromApi = responseFromApi.headers;
                const requestFromApi = responseFromApi.request;
                const dataFromApi = responseFromApi === null || responseFromApi === void 0 ? void 0 : responseFromApi.data;
                void [configFromApi, headersFromApi, requestFromApi, dataFromApi];
                const { DATA_HSH, path, URL_HSH: URL_HSH_, UDATAGRAM } = urlAndDataRest;
                myRedis.incr(`cache:total:${URL_HSH_}`);
                // const cacheTotal = ((await myRedis.get(`cache:total:${URL_HSH_}`)) ??
                // 0) as number;
                myRedis.incr(`cache:${configFromApi.url}`);
                // const cacheTotalx = ((await myRedis.get(
                //   `cache:total:${configFromApi.url}`,
                // )) ?? 0) as number;
                myRedis.sadd(`cache:unique:${URL_HSH_}`, DATA_HSH);
                // const cacheUnique = await myRedis.scard(`cache:unique:${URL_HSH_}`);
                // try {
                //   console.log(
                //     `total(${Number(cacheTotal)}) / unique(${Number(cacheUnique)}): `,
                //     number(cacheTotal) / Number(cacheUnique),
                //   );
                // } catch (error) {
                //   console.error('cacheTotal / cacheUnique: ', error.message);
                // }
                void [dataToCache, DATA_HSH, path, URL_HSH_, UDATAGRAM];
                const responseToCache = Object.assign(Object.assign(Object.assign(Object.assign({}, responseFromApi), { config: Object.assign(Object.assign({ fromCache: true }, responseFromApi === null || responseFromApi === void 0 ? void 0 : responseFromApi.config), { adapter: '[Function: httpAdapter, /*NOT AVAILABLE FROM CACHE*/]', availableFromCache: 'partial', headers: Object.assign(Object.assign({ fromApi: false, fromCache: true, proxy: Object.assign({}, this.proxy) }, (_a = responseFromApi === null || responseFromApi === void 0 ? void 0 : responseFromApi.config) === null || _a === void 0 ? void 0 : _a.headers), { Authorization: '[Redacted] ...', location: '[Redacted] ...' }), transformRequest: [
                            '[Function: transformRequest, /*NOT AVAILABLE FROM CACHE*/]',
                        ], transformResponse: [
                            '[Function: transformResponse, /*NOT AVAILABLE FROM CACHE*/]',
                        ], validateStatus: '[Function: validateStatus, /*NOT AVAILABLE FROM CACHE*/]' }), data: Object.assign({}, dataFromApi), headers: Object.assign(Object.assign({ 'fromCache': true }, responseFromApi.headers), { 'connection': 'CACHED', 'strict-transport-security': '[NOT AVAILABLE FROM CACHE]', 'x-ratelimit-remaining': '9999999', 'x-ratelimit-reset': '0' }), request: Object.assign(Object.assign({ availableFromCache: 'partial', fromCache: true }, responseFromApi === null || responseFromApi === void 0 ? void 0 : responseFromApi.request), { _events: '[NOT AVAILABLE FROM CACHE]', _redirectable: '[NOT AVAILABLE FROM CACHE]', agent: '[NOT AVAILABLE FROM CACHE]', res: '[NOT AVAILABLE FROM CACHE]', socket: '[NOT AVAILABLE FROM CACHE]' }) }), urlAndDataRest), { responseFromApi: false, responseFromCache: true });
                if (this.handlerOptions.noCaching !== true) {
                    // $ WRITE TO CACHE ――――――――――――――――――――――――――――――――――――――――――――――――――――$>
                    // id0('if (this?.handlerOptions?.noCaching !== true)');
                    // const options: ISetOptions = { expire: 1000 };
                    yield jsonCache.set(URL_HSH, responseToCache /* , options */);
                }
                myRedis.disconnect();
                // !! RETURN VALUE FROM API ――――――――――――――――――――――――――――――――――――――――――――――$>
                responseFromApi.responseFromApi = true;
                responseFromApi.headers.fromApi = true;
                responseFromApi.responseFromCache = false;
                responseFromApi.headers.fromCache = false;
                return utils_1.id0(responseFromApi);
            }
            catch (error) {
                myRedis.disconnect();
                throw error;
            }
        });
    }
}
exports.RedisQtApiProxyHandlerClass = RedisQtApiProxyHandlerClass;
function redisProxyHandler(mainProxyHandlerOptions = {}) {
    return function clientHandlerFactory(credentials) {
        var _a, _b;
        const client = __1.getHttpClient();
        const newProxy = {};
        newProxy.activate = (proxyHandlerOptions) => new Proxy(client, new RedisQtApiProxyHandlerClass(Object.assign(Object.assign({}, mainProxyHandlerOptions), proxyHandlerOptions)));
        newProxy.httpDataEndPointConnector = (_a = mainProxyHandlerOptions.httpConnectProxy) !== null && _a !== void 0 ? _a : true;
        newProxy.oAuthHttpCredentials = (_b = mainProxyHandlerOptions.oAuthHttpProxy) !== null && _b !== void 0 ? _b : false;
        newProxy.credendials = credentials;
        return newProxy;
    };
}
exports.redisProxyHandler = redisProxyHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMtY2xpZW50LXByb3h5LWhhbmRsZXItY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy9wcm94aWVzL2NsaWVudC9yZWRpcy9yZWRpcy1jbGllbnQtcHJveHktaGFuZGxlci1jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsOENBQThDO0FBQzlDLGlGQUFpRjtBQUNqRiw4REFBNEI7QUFDNUIsb0VBQW1DO0FBR25DLGdEQUs4QjtBQUM5QixnQ0FBK0M7QUFNL0MsNEhBQXFHO0FBTXJHLE1BQU0sMkJBQ0osU0FBUSx5RUFBNEI7SUFFcEMsbURBQW1EO0lBQ25ELFlBQXNCLGNBQW1DO1FBQ3ZELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Ozs7bUJBREY7O1FBTXRCOzs7O21CQUFrQjtnQkFDaEIsS0FBSyxFQUFFLDZCQUE2QjtnQkFDcEMsT0FBTyxFQUFFLDZDQUE2QztnQkFDdEQsVUFBVSxFQUFFLGlCQUFpQjtnQkFDN0IsS0FBSyxFQUFFLDJCQUEyQjthQUNuQztXQUFDO1FBVEEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBU1ksS0FBSyxDQUFDLE1BQVMsRUFBRSxPQUFZLEVBQUUsUUFBYzs7O1lBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQUssRUFBRSxDQUFDO1lBRTVCLElBQUk7Z0JBQ0YsTUFBTSxPQUFPLEdBQUcsNEJBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4Qzs7Ozs7Ozs7O2FBU0g7Z0JBQ0csTUFBTSxTQUFTLEdBQUcsSUFBSSxvQkFBUyxDQUFpQixPQUFP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ZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN2QyxlQUFlLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMxQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBRTFDLE9BQU8sV0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzdCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNyQixNQUFNLEtBQUssQ0FBQzthQUNiOztLQUNGO0NBQ0Y7QUFFUSxrRUFBMkI7QUFFcEMsU0FBZ0IsaUJBQWlCLENBQy9CLDBCQUErQyxFQUFFO0lBRWpELE9BQU8sU0FBUyxvQkFBb0IsQ0FBQyxXQUF5Qjs7UUFDNUQsTUFBTSxNQUFNLEdBQWlCLGlCQUFhLEVBQUUsQ0FBQztRQUM3QyxNQUFNLFFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBRW5DLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxtQkFBd0MsRUFBRSxFQUFFLENBQy9ELElBQUksS0FBSyxDQUNQLE1BQU0sRUFDTixJQUFJLDJCQUEyQixpQ0FDMUIsdUJBQXVCLEdBQ3ZCLG1CQUFtQixFQUN0QixDQUNILENBQUM7UUFDSixRQUFRLENBQUMseUJBQXlCLFNBQ2hDLHVCQUF1QixDQUFDLGdCQUFnQixtQ0FBSSxJQUFJLENBQUM7UUFDbkQsUUFBUSxDQUFDLG9CQUFvQixTQUMzQix1QkFBdUIsQ0FBQyxjQUFjLG1DQUFJLEtBQUssQ0FBQztRQUNsRCxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUVuQyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLENBQUM7QUFDSixDQUFDO0FBdkJELDhDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJhZGFyL25vLWR1cGxpY2F0ZS1zdHJpbmcgKi9cbi8vICNyZWdpb24gSU1QT1JUUyDigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJXigJUgJD5cbmltcG9ydCBSZWRpcyBmcm9tICdpb3JlZGlzJztcbmltcG9ydCBKU09OQ2FjaGUgZnJvbSAncmVkaXMtanNvbic7XG5cbmltcG9ydCB0eXBlIHsgQ3JlZGVudGlhbHMsIFByb3h5RmFjdG9yeV8gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB7XG4gIGdldFF0VXJsUGF0aEZyb21BcmdzLFxuICBnZXRVcmxBbmREYXRhSGFzaGVzLFxuICBnZXRVcmxIYXNoLFxuICBpZDAsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IGVjaDAsIGdldEh0dHBDbGllbnQgfSBmcm9tICcuLi8uLi8uLic7XG5pbXBvcnQgdHlwZSB7XG4gIENsaWVudFN0YXRpYyxcbiAgLy8gaW9SZWRpcyxcbiAgUHJveHlIYW5kbGVyT3B0aW9ucyxcbn0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUHJveHlIYW5kbGVyQWJzdHJhY3RDbGFzcyB9IGZyb20gJy4uLy4uL2NvcmUvcmVmbGV4aW9uLWxvZ2dlci1wcm94eS1oYW5kbGVyLWFic3RhcmN0LWNsYXNzJztcblxuLy8gI2VuZHJlZ2lvbiBJTVBPUlRTIOKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAlSAkPlxuZXhwb3J0IHR5cGUgSW9SZWRpcyA9IFJlZGlzLlJlZGlzO1xuZXhwb3J0IHR5cGUgQ2FjaGVkUmVzcG9uc2UgPSBhbnk7XG5cbmNsYXNzIFJlZGlzUXRBcGlQcm94eUhhbmRsZXJDbGFzczxUIGV4dGVuZHMgRnVuY3Rpb24gPSBDbGllbnRTdGF0aWM+XG4gIGV4dGVuZHMgUHJveHlIYW5kbGVyQWJzdHJhY3RDbGFzczxUPlxuICBpbXBsZW1lbnRzIFByb3h5SGFuZGxlcjxUPiB7XG4gIC8vIHByaXZhdGUganNvbkNhY2hlOiBKU09OQ2FjaGU8Q2FjaGVkQXBpUmVzcG9uc2U+O1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaGFuZGxlck9wdGlvbnM6IFByb3h5SGFuZGxlck9wdGlvbnMpIHtcbiAgICBzdXBlcihoYW5kbGVyT3B0aW9ucyk7XG4gICAgdGhpcy5oYW5kbGVyT3B0aW9ucy5ub3RGcm9tQ2FjaGUgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZXJPcHRpb25zLm5vQ2FjaGluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb3h5ID0ge1xuICAgIGNsYXNzOiAnUmVkaXNRdEFwaVByb3h5SGFuZGxlckNsYXNzJyxcbiAgICBleHRlbmRzOiAnUmVmbGV4aW9uTG9nZ2VyUHJveHlIYW5kbGVyQWJzdHJhY3RDbGFzczxUPicsXG4gICAgaW1wbGVtZW50czogJ1Byb3h5SGFuZGxlcjxUPicsXG4gICAgcHJveHk6ICdSZWRpcyBRdEFwaSBDYWNoaW5nIFByb3h5JyxcbiAgfTtcblxuICBwdWJsaWMgYXN5bmMgYXBwbHkodGFyZ2V0OiBULCB0aGlzQXJnOiBhbnksIGFyZ0FycmF5PzogYW55KSB7XG4gICAgY29uc3QgbXlSZWRpcyA9IG5ldyBSZWRpcygpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybFBhdGggPSBnZXRRdFVybFBhdGhGcm9tQXJncyhhcmdBcnJheSk7XG4gICAgICBjb25zdCB7IFVSTF9IU0ggfSA9IGdldFVybEhhc2godXJsUGF0aCk7XG4gICAgICAvKlxuXG4gZGF0YTogeyB0aW1lOiAnMjAyMS0wMS0yN1QwMDo1ODozMy41NzkwMDAtMDU6MDAnIH0sXG4gIFVEQVRBR1JBTTogJ1VEQVRBR1JBTToyMEQwRjZCQjU1NTlBQ0YnLFxuICBVUkxfSFNIOiAnVVJMOjgwODFGOTQ3QkIwN0RCMEE0QScsXG4gIHBhdGg6ICcvdjEvdGltZScsXG4gIHJlc3BvbnNlRnJvbUNhY2hlOiB0cnVlLFxuICByZXNwb25zZUZyb21BcGk6IGZhbHNlLFxuICBzdGF0dXNUZXh0OiAnT0snXG4gKi9cbiAgICAgIGNvbnN0IGpzb25DYWNoZSA9IG5ldyBKU09OQ2FjaGU8Q2FjaGVkUmVzcG9uc2U+KG15UmVkaXMsIHtcbiAgICAgICAgcHJlZml4OiAnY2FjaGU6cmVzcG9uc2U6JyxcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc3QgaXNJbkV4Y2x1c2lvbkxpc3QgPSBbJ1VSTDo4MDgxRjk0N0JCMDdEQjBBNEEnXS5zb21lKFxuICAgICAgLy8gICB1UkwgPT4gVVJMID09PSAnVVJMOjgwODFGOTQ3QkIwN0RCMEE0QScsXG4gICAgICAvLyApO1xuXG4gICAgICBpZiAodGhpcy5oYW5kbGVyT3B0aW9ucy5ub3RGcm9tQ2FjaGUgIT09IHRydWUpIHtcbiAgICAgICAgaWQwKHsgaXQ6IHRoaXMuaGFuZGxlck9wdGlvbnMgfSk7XG4gICAgICAgIC8vICQgUkVBRCBGUk9NIENBQ0hFIOKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAlSQ+XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRnJvbUNhY2hlID0gYXdhaXQganNvbkNhY2hlLmdldChVUkxfSFNIKTtcblxuICAgICAgICBpZiAocmVzcG9uc2VGcm9tQ2FjaGU/LnJlc3BvbnNlRnJvbUNhY2hlID09PSB0cnVlKSB7XG4gICAgICAgICAgbXlSZWRpcy5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICAvLyArUkVUVVJOIFZBTFVFIEZST00gQ0FDSEUg4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCV4oCVJD5cbiAgICAgICAgICByZXR1cm4gaWQwKHJlc3BvbnNlRnJvbUNhY2hlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWNoMCh7IE1FU1NHQUU6ICdOT1QgRlJPTSBDQUNIRScgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vICQgQ1JFQVRFIFZBTFVFIFRPIENBQ0hFIOKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAlSQ+XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlRnJvbUFwaSA9IGF3YWl0IFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSk7XG4gICAgICBjb25zdCBkYXRhVG9IYXNoID0gcmVzcG9uc2VGcm9tQXBpLmRhdGE7XG4gICAgICBjb25zdCB1cmxBbmREYXRhSGFzaGVzID0gZ2V0VXJsQW5kRGF0YUhhc2hlcyh1cmxQYXRoLCBkYXRhVG9IYXNoKTtcbiAgICAgIGNvbnN0IHsgZGF0YVRvQ2FjaGUsIC4uLnVybEFuZERhdGFSZXN0IH0gPSB1cmxBbmREYXRhSGFzaGVzO1xuICAgICAgY29uc3QgY29uZmlnRnJvbUFwaSA9IHJlc3BvbnNlRnJvbUFwaS5jb25maWc7XG4gICAgICBjb25zdCBoZWFkZXJzRnJvbUFwaSA9IHJlc3BvbnNlRnJvbUFwaS5oZWFkZXJzO1xuICAgICAgY29uc3QgcmVxdWVzdEZyb21BcGkgPSByZXNwb25zZUZyb21BcGkucmVxdWVzdDtcbiAgICAgIGNvbnN0IGRhdGFGcm9tQXBpID0gcmVzcG9uc2VGcm9tQXBpPy5kYXRhO1xuXG4gICAgICB2b2lkIFtjb25maWdGcm9tQXBpLCBoZWFkZXJzRnJvbUFwaSwgcmVxdWVzdEZyb21BcGksIGRhdGFGcm9tQXBpXTtcblxuICAgICAgY29uc3QgeyBEQVRBX0hTSCwgcGF0aCwgVVJMX0hTSDogVVJMX0hTSF8sIFVEQVRBR1JBTSB9ID0gdXJsQW5kRGF0YVJlc3Q7XG5cbiAgICAgIG15UmVkaXMuaW5jcihgY2FjaGU6dG90YWw6JHtVUkxfSFNIX31gKTtcbiAgICAgIC8vIGNvbnN0IGNhY2hlVG90YWwgPSAoKGF3YWl0IG15UmVkaXMuZ2V0KGBjYWNoZTp0b3RhbDoke1VSTF9IU0hffWApKSA/P1xuICAgICAgLy8gMCkgYXMgbnVtYmVyO1xuICAgICAgbXlSZWRpcy5pbmNyKGBjYWNoZToke2NvbmZpZ0Zyb21BcGkudXJsfWApO1xuICAgICAgLy8gY29uc3QgY2FjaGVUb3RhbHggPSAoKGF3YWl0IG15UmVkaXMuZ2V0KFxuICAgICAgLy8gICBgY2FjaGU6dG90YWw6JHtjb25maWdGcm9tQXBpLnVybH1gLFxuICAgICAgLy8gKSkgPz8gMCkgYXMgbnVtYmVyO1xuICAgICAgbXlSZWRpcy5zYWRkKGBjYWNoZTp1bmlxdWU6JHtVUkxfSFNIX31gLCBEQVRBX0hTSCk7XG4gICAgICAvLyBjb25zdCBjYWNoZVVuaXF1ZSA9IGF3YWl0IG15UmVkaXMuc2NhcmQoYGNhY2hlOnVuaXF1ZToke1VSTF9IU0hffWApO1xuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXG4gICAgICAvLyAgICAgYHRvdGFsKCR7TnVtYmVyKGNhY2hlVG90YWwpfSkgLyB1bmlxdWUoJHtOdW1iZXIoY2FjaGVVbmlxdWUpfSk6IGAsXG4gICAgICAvLyAgICAgbnVtYmVyKGNhY2hlVG90YWwpIC8gTnVtYmVyKGNhY2hlVW5pcXVlKSxcbiAgICAgIC8vICAgKTtcbiAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ2NhY2hlVG90YWwgLyBjYWNoZVVuaXF1ZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAvLyB9XG5cbiAgICAgIHZvaWQgW2RhdGFUb0NhY2hlLCBEQVRBX0hTSCwgcGF0aCwgVVJMX0hTSF8sIFVEQVRBR1JBTV07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZTogQ2FjaGVkUmVzcG9uc2UgPSB7XG4gICAgICAgIC4uLnJlc3BvbnNlRnJvbUFwaSxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZnJvbUNhY2hlOiB0cnVlLFxuICAgICAgICAgIC4uLnJlc3BvbnNlRnJvbUFwaT8uY29uZmlnLFxuICAgICAgICAgIGFkYXB0ZXI6ICdbRnVuY3Rpb246IGh0dHBBZGFwdGVyLCAvKk5PVCBBVkFJTEFCTEUgRlJPTSBDQUNIRSovXScsXG4gICAgICAgICAgYXZhaWxhYmxlRnJvbUNhY2hlOiAncGFydGlhbCcsXG5cbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBmcm9tQXBpOiBmYWxzZSxcbiAgICAgICAgICAgIGZyb21DYWNoZTogdHJ1ZSxcbiAgICAgICAgICAgIHByb3h5OiB7IC4uLnRoaXMucHJveHkgfSxcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlRnJvbUFwaT8uY29uZmlnPy5oZWFkZXJzLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ1tSZWRhY3RlZF0gLi4uJyxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnW1JlZGFjdGVkXSAuLi4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogW1xuICAgICAgICAgICAgJ1tGdW5jdGlvbjogdHJhbnNmb3JtUmVxdWVzdCwgLypOT1QgQVZBSUxBQkxFIEZST00gQ0FDSEUqL10nLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IFtcbiAgICAgICAgICAgICdbRnVuY3Rpb246IHRyYW5zZm9ybVJlc3BvbnNlLCAvKk5PVCBBVkFJTEFCTEUgRlJPTSBDQUNIRSovXScsXG4gICAgICAgICAgXSxcbiAgICAgICAgICB2YWxpZGF0ZVN0YXR1czpcbiAgICAgICAgICAgICdbRnVuY3Rpb246IHZhbGlkYXRlU3RhdHVzLCAvKk5PVCBBVkFJTEFCTEUgRlJPTSBDQUNIRSovXScsXG4gICAgICAgICAgLy8gKi9cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogeyAuLi5kYXRhRnJvbUFwaSB9LFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ2Zyb21DYWNoZSc6IHRydWUsXG4gICAgICAgICAgLi4ucmVzcG9uc2VGcm9tQXBpLmhlYWRlcnMsXG4gICAgICAgICAgJ2Nvbm5lY3Rpb24nOiAnQ0FDSEVEJyxcbiAgICAgICAgICAnc3RyaWN0LXRyYW5zcG9ydC1zZWN1cml0eSc6ICdbTk9UIEFWQUlMQUJMRSBGUk9NIENBQ0hFXScsXG4gICAgICAgICAgJ3gtcmF0ZWxpbWl0LXJlbWFpbmluZyc6ICc5OTk5OTk5JyxcbiAgICAgICAgICAneC1yYXRlbGltaXQtcmVzZXQnOiAnMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICBhdmFpbGFibGVGcm9tQ2FjaGU6ICdwYXJ0aWFsJyxcbiAgICAgICAgICBmcm9tQ2FjaGU6IHRydWUsXG4gICAgICAgICAgLi4ucmVzcG9uc2VGcm9tQXBpPy5yZXF1ZXN0LFxuICAgICAgICAgIF9ldmVudHM6ICdbTk9UIEFWQUlMQUJMRSBGUk9NIENBQ0hFXScsXG4gICAgICAgICAgX3JlZGlyZWN0YWJsZTogJ1tOT1QgQVZBSUxBQkxFIEZST00gQ0FDSEVdJyxcbiAgICAgICAgICBhZ2VudDogJ1tOT1QgQVZBSUxBQkxFIEZST00gQ0FDSEVdJyxcbiAgICAgICAgICByZXM6ICdbTk9UIEFWQUlMQUJMRSBGUk9NIENBQ0hFXScsXG4gICAgICAgICAgc29ja2V0OiAnW05PVCBBVkFJTEFCTEUgRlJPTSBDQUNIRV0nLFxuICAgICAgICB9LFxuICAgICAgICAuLi51cmxBbmREYXRhUmVzdCwgLy8geyAuLi51cmxBbmREYXRhSGFzaGVzLCBkYXRhVG9DYWNoZTogJ1tEdXBsaWNhdGVdJyB9LFxuICAgICAgICByZXNwb25zZUZyb21BcGk6IGZhbHNlLFxuICAgICAgICByZXNwb25zZUZyb21DYWNoZTogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmhhbmRsZXJPcHRpb25zLm5vQ2FjaGluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyAkIFdSSVRFIFRPIENBQ0hFIOKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAlSQ+XG4gICAgICAgIC8vIGlkMCgnaWYgKHRoaXM/LmhhbmRsZXJPcHRpb25zPy5ub0NhY2hpbmcgIT09IHRydWUpJyk7XG4gICAgICAgIC8vIGNvbnN0IG9wdGlvbnM6IElTZXRPcHRpb25zID0geyBleHBpcmU6IDEwMDAgfTtcblxuICAgICAgICBhd2FpdCBqc29uQ2FjaGUuc2V0KFVSTF9IU0gsIHJlc3BvbnNlVG9DYWNoZSAvKiAsIG9wdGlvbnMgKi8pO1xuICAgICAgfVxuXG4gICAgICBteVJlZGlzLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgLy8gISEgUkVUVVJOIFZBTFVFIEZST00gQVBJIOKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAleKAlSQ+XG4gICAgICByZXNwb25zZUZyb21BcGkucmVzcG9uc2VGcm9tQXBpID0gdHJ1ZTtcbiAgICAgIHJlc3BvbnNlRnJvbUFwaS5oZWFkZXJzLmZyb21BcGkgPSB0cnVlO1xuICAgICAgcmVzcG9uc2VGcm9tQXBpLnJlc3BvbnNlRnJvbUNhY2hlID0gZmFsc2U7XG4gICAgICByZXNwb25zZUZyb21BcGkuaGVhZGVycy5mcm9tQ2FjaGUgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIGlkMChyZXNwb25zZUZyb21BcGkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBteVJlZGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBSZWRpc1F0QXBpUHJveHlIYW5kbGVyQ2xhc3MgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlzUHJveHlIYW5kbGVyKFxuICBtYWluUHJveHlIYW5kbGVyT3B0aW9uczogUHJveHlIYW5kbGVyT3B0aW9ucyA9IHt9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjbGllbnRIYW5kbGVyRmFjdG9yeShjcmVkZW50aWFscz86IENyZWRlbnRpYWxzKSB7XG4gICAgY29uc3QgY2xpZW50OiBDbGllbnRTdGF0aWMgPSBnZXRIdHRwQ2xpZW50KCk7XG4gICAgY29uc3QgbmV3UHJveHk6IFByb3h5RmFjdG9yeV8gPSB7fTtcblxuICAgIG5ld1Byb3h5LmFjdGl2YXRlID0gKHByb3h5SGFuZGxlck9wdGlvbnM6IFByb3h5SGFuZGxlck9wdGlvbnMpID0+XG4gICAgICBuZXcgUHJveHkoXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgbmV3IFJlZGlzUXRBcGlQcm94eUhhbmRsZXJDbGFzcyh7XG4gICAgICAgICAgLi4ubWFpblByb3h5SGFuZGxlck9wdGlvbnMsXG4gICAgICAgICAgLi4ucHJveHlIYW5kbGVyT3B0aW9ucyxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIG5ld1Byb3h5Lmh0dHBEYXRhRW5kUG9pbnRDb25uZWN0b3IgPVxuICAgICAgbWFpblByb3h5SGFuZGxlck9wdGlvbnMuaHR0cENvbm5lY3RQcm94eSA/PyB0cnVlO1xuICAgIG5ld1Byb3h5Lm9BdXRoSHR0cENyZWRlbnRpYWxzID1cbiAgICAgIG1haW5Qcm94eUhhbmRsZXJPcHRpb25zLm9BdXRoSHR0cFByb3h5ID8/IGZhbHNlO1xuICAgIG5ld1Byb3h5LmNyZWRlbmRpYWxzID0gY3JlZGVudGlhbHM7XG5cbiAgICByZXR1cm4gbmV3UHJveHk7XG4gIH07XG59XG4iXX0=